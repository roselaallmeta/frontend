console.log('user.js loaded');


const user_table = document.getElementById('user-table');
const addUserButton = document.getElementById('user-button');


const addUserRowToTable = (row) => {
	const tr = document.createElement('tr');
	tr.id = 'tr-user-' + row.id;

	const userID_td = document.createElement('td');
	userID_td.innerHTML = row.id;

	const name_td = document.createElement('td');
	name_td.innerHTML = row.name;

	const email_td = document.createElement('td');
	email_td.innerHTML = row.email;

	const role_td = document.createElement('td');
	role_td.innerHTML = row.role;

	const actions_td = document.createElement('button');
	actions_td.innerHTML = 'Delete User';
	actions_td.addEventListener('click', () => deleteUserRow(row.user_id));

	tr.appendChild(userID_td);
	tr.appendChild(name_td);
	tr.appendChild(email_td);
	tr.appendChild(role_td);
	tr.appendChild(actions_td);

	user_table.appendChild(tr);
};


const getUserRows = async () => {
	const response = await fetch(`${BACKEND_URL}/users`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await response.json();
	console.log('users', data);

	for (let row of data) {
		addUserRowToTable(row);
	}
};


const deleteUserRow = async (user_id) => {
	const endpoint = BACKEND_URL + '/users/' + user_id;
	const response = await fetch(endpoint, {
		method: 'DELETE',
	});

	if (!response.ok) {
		alert('Something went wrong');
		return;
	}

	const data = await response.json();
	console.log('DELETE', endpoint);

	// Delete row
	const targetRow = document.getElementById('tr-user-' + user_id);
	targetRow.remove();
};


addUserButton.addEventListener('click', () => {
	getUserRows();
});



const userManageForm = document.getElementById('manage-user-form');

function processUserManageForm(e) {
	if (e.preventDefault) e.preventDefault();

	const data = new FormData(userManageForm);

	const formInputs = {
		name: undefined,
		email: undefined,
		role: undefined,
		password: undefined,
	};

	for (const [name, value] of data) {
		if (!Object.hasOwn(formInputs, name)) continue;

		formInputs[name] = value;
	}

	console.log({ formInputs });

	if (
		!formInputs.name ||
		formInputs.name.trim() == '' ||
		!formInputs.email ||
		formInputs.email.trim() == '' ||
		!formInputs.role ||
		formInputs.role.trim() == '' ||
		!formInputs.password ||
		formInputs.password.trim() == ''
	) {
		alert('Invalid inputs');
		return false;
	}

	const submitData = async (input) => {
		const url = BACKEND_URL + '/users';

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


			addUserRowToTable(row);

			userManageForm?.reset();
		} catch (err) {
			console.error(err);
			return false;
		}
	};

	submitData(formInputs);
}

userManageForm.addEventListener('submit', processUserManageForm);

//--------------------------------------------------

// const userSelect = document.getElementById('user_select');

// function addSelectUser() {

// 		fetch(BACKEND_URL + '/users?limit=10&offset=0')
// 		.then((res) => res.json())
// 		.then((data) => {
// 			data.forEach((user) => {
// 				const option = document.createElement('option');
// 				option.textContent = `${user.name}`;
// 				userSelect.appendChild(option);
// 			});
// 		});

// }

// const selectResponse = addSelectUser();

//-----------------------------------------------

const userSelectID = document.getElementById('user_select_id');

function addSelectUserID() {
	try {
		fetch(BACKEND_URL + '/users?limit=10&offset=0')
			.then((res) => res.json())
			.then((data) => {
				data.forEach((user) => {
					const option = document.createElement('option');
					option.textContent = `${user.name}`;
					userSelectID.appendChild(option);
				});
			});
	} catch (e) {
		alert(e);
	}
}

const selectUserResponseID = addSelectUserID();




const userInvestmentSelectID = document.getElementById('userInvestment_select_id');


document.addEventListener("DOMContentLoaded" , function () {
	function addSelectUserInvestmentID() {
	fetch(BACKEND_URL + '/users/')
		.then((res) => res.json())
		.then((data) => {
			data.forEach((user) => {
				const option = document.createElement('option');
				option.textContent = `${user.name}`;
				option.value = user.id; 
				userInvestmentSelectID.appendChild(option);
			});
		});
};
const selectUserInvestmentResponseID = addSelectUserInvestmentID();
});