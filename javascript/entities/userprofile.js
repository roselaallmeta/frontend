console.log('userprofile.js loaded');



const profile_table = document.getElementById('profile-table');
const addProfileButton = document.getElementById('profile-button');


const addProfileRowToTable = (row) => {
	const tr = document.createElement('tr');
	tr.id = 'tr-user_profile-' + row.id;

	const id_td = document.createElement('td');
	id_td.innerHTML = row.id;

	const userID_td = document.createElement('td');
	userID_td.innerHTML = row.user_id;

	const gender_td = document.createElement('td');
	gender_td.innerHTML = row.gender;

	const phoneNumber_td = document.createElement('td');
	phoneNumber_td.innerHTML = row.phoneNumber;

	const createdAt_td = document.createElement('td');
	createdAt_td.innerHTML = row.createdAt;

	const updatedAt_td = document.createElement('td');
	updatedAt_td.innerHTML = row.updatedAt;

	const status_td = document.createElement('td');
	status_td.innerHTML = row.status;

	const industry_td = document.createElement('td');
	industry_td.innerHTML = row.industry;

	const description_td = document.createElement('td');
	description_td.innerHTML = row.description;

	const actions_td = document.createElement('button');
	actions_td.innerHTML = 'Delete Profile';
	actions_td.addEventListener('click', () => deleteProfileRow(row.id));

	tr.appendChild(id_td);
	tr.appendChild(userID_td);
	tr.appendChild(gender_td);
	tr.appendChild(phoneNumber_td);
	tr.appendChild(createdAt_td);
	tr.appendChild(updatedAt_td);
	tr.appendChild(status_td);
	tr.appendChild(industry_td);
	tr.appendChild(description_td);
	tr.appendChild(actions_td);

	profile_table.appendChild(tr);
};

const getProfileRows = async () => {
	const response = await fetch(`${BACKEND_URL}/user_profiles?limit=10&offset=0`);
	const data = await response.json();
	console.log('user_profiles', data);

	for (let row of data) {
		addProfileRowToTable(row);
	}
};


const deleteProfileRow = async (id) => {
	const endpoint = BACKEND_URL + /user_profiles/ + id;
	const response = await fetch(endpoint, {
		method: 'DELETE',
	});

	if (!response.ok) {
		alert('Something went wrong');
		return;
	}

	const data = await response.json();
	console.log('DELETE', endpoint);

	const targetRow = document.getElementById('tr-user_profile-' + id);
	targetRow.remove();
};

addProfileButton.addEventListener('click', () => {
	getProfileRows();
});

const profileManageForm = document.getElementById('manage-profile-form');

function processProfileManageForm(e) {
	if (e.preventDefault) e.preventDefault();

	const data = new FormData(profileManageForm);
	const formInputs = {
		user_id: undefined,
		gender: undefined,
		phone_number: undefined,
		status: undefined,
		industry: undefined,
		description: undefined,
	};

	for (const [name, value] of data) {
		if (!Object.hasOwn(formInputs, name)) continue;

		formInputs[name] = value;
	}

	console.log({ formInputs });

	if (
		(!formInputs.user_id ||
			formInputs.user_id.trim() == '' ||
			!formInputs.gender ||
			formInputs.gender.trim() == '' ||
			!formInputs.phone_number ||
			formInputs.phone_number.trim() == '' ||
			!formInputs.status ||
			formInputs.status.trim() == '' ||
			!formInputs.industry ||
			formInputs.industry.trim() == '',
		!formInputs.description || formInputs.description.trim() == '')
	) {
		alert('Invalid inputs');
		return false;
	}

	const submitData = async (input) => {
		const url = BACKEND_URL + '/user_profiles';

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

			getProfileRows(row);
		} catch (err) {
			console.error(err);
			return false;
		}
	};

	submitData(formInputs);
}

profileManageForm.addEventListener('submit', processProfileManageForm);