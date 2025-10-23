console.log('team.js loaded');
// const BACKEND_URL = 'http://localhost:8000';

const teams_table = document.getElementById('teams-table');
const addTeamsButton = document.getElementById('teams-button');
const leaveTeamButton = document.getElementById('leave-team');


//fix undefined id tek teams -> nuk e merr fronti sic duhet 
// kur merr undefined, dmth qe row does not have attribute id
const addTeamRowToTable = (row) => {
	const tr = document.createElement('tr');
	tr.id = 'tr-team-' + row.id;

	const id_td = document.createElement('td');
	id_td.innerHTML = row.id;

	const name_td = document.createElement('td');
	name_td.innerHTML = row.name;

	const createdAt_td = document.createElement('td');
	createdAt_td.innerHTML = row.created_at;

  const actions_td = document.createElement('td');



	const delete_button = document.createElement('button');
	delete_button.innerHTML = 'Delete Team';
	delete_button.addEventListener('click', () => {
		deleteTeamRow(row.id);
		});
		
	actions_td.appendChild(delete_button);



	const addMember_button = document.createElement('button');
	addMember_button.innerHTML = 'Join Team';
	addMember_button.addEventListener('click', () => {
		getMemberRows();
	});

	actions_td.appendChild(addMember_button);


	tr.appendChild(id_td);
	tr.appendChild(name_td);
	tr.appendChild(createdAt_td);
	tr.appendChild(actions_td);

	teams_table.appendChild(tr);

};

// shto nje buton view members






const getTeamRows = async () => {
	const response = await fetch(`${BACKEND_URL}/teams?limit=10&offset=0`);
	const data = await response.json();
	console.log('teams', data);

	for (let row of data) {
		addTeamRowToTable(row);
	}
};


const deleteTeamRow = async (id) => {
	const endpoint = BACKEND_URL + '/teams/' + id;
	const response = await fetch(endpoint, {
		method: 'DELETE',
	});

	if (!response.ok) {
		alert('Something went wrong');
		return;
	}

	const data = await response.json();
	console.log('DELETE', endpoint);

	const targetRow = document.getElementById('tr-team-' + id);
	targetRow.remove();
};

addTeamsButton.addEventListener('click', () => {
	getTeamRows();
});


const teamManageForm = document.getElementById('manage-team-form');


function processTeamManageForm(e) {
	if (e.preventDefault) e.preventDefault();

	const data = new FormData(teamManageForm);

	const formInputs = {
		name: undefined
	};

	for (const [name, value] of data) {
		if (!Object.hasOwn(formInputs, name)) continue;
		formInputs[name] = value;
	}

	console.log({ formInputs });

	if (
		!formInputs.name ||
		formInputs.name.trim() == '' 
	) {
		alert('Invalid inputs');
		return false;
	}


// 
	const submitData = async (input) => {
		const url = BACKEND_URL + '/teams';

		try {
			const res = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(input),
			});

			const row = await res.json();

			if (!row || !row?.id) {
				const message = 'No row received.';

				alert(message);
				throw new Error(message);
			}

			addTeamRowToTable(row);

			teamManageForm?.reset();
		} catch (err) {
			console.error(err);
			return false;
		}
	};


	// { name: "Test", "members": [1] } - nuk i jep kete sepse nuk kerkon kte form

	submitData({
		team: {
			name: formInputs.name
		},
		members: formInputs.members
	})
}

teamManageForm.addEventListener('submit', processTeamManageForm);