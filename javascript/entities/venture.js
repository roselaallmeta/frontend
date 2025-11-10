
console.log('venture.js loaded');



const venture_table = document.getElementById('venture-table');
const addVenturesButton = document.getElementById('venture-button');

const addVentureRowToTable = async (row) => {
	const tr = document.createElement('tr');
	tr.id = 'tr-venture-' + row.id;

	const id_td = document.createElement('td');
	id_td.innerHTML = row.id;

	const name_td = document.createElement('td');
	name_td.innerHTML = row.name;

	const createdAt_td = document.createElement('td');
	createdAt_td.innerHTML = row.created_at;

	const phoneNumber_td = document.createElement('td');
	phoneNumber_td.innerHTML = row.phone_number;

	const email_td = document.createElement('td');
	email_td.innerHTML = `<a href="mailto:${row.email}">${row.email}</a>`;

	const description_td = document.createElement('td');
	description_td.innerHTML = row.description;

	const industries_td = document.createElement('td');
	industries_td.innerHTML = row.industries;

	const fundingStage_td = document.createElement('td');
	fundingStage_td.innerHTML = row.funding_stage;

	const websiteURL_td = document.createElement('td');
	websiteURL_td.innerHTML = row.website_url;

	const fundingGoal_td = document.createElement('td');
	fundingGoal_td.innerHTML = row.funding_goal;

	const totalFunding_td = document.createElement('td');
	totalFunding_td.innerHTML = row.total_funding;

	const valuation_td = document.createElement('td');
	valuation_td.innerHTML = row.valuation;

	const status_td = document.createElement('td');
	status_td.innerHTML = row.status;

	const actions_td = document.createElement('td');

	const delete_button = document.createElement('button');
	delete_button.innerHTML = 'Delete Venture';
	delete_button.addEventListener('click', () => {
		deleteVentureRow(row.id);
	});

	const invest_button = document.createElement('button');
	invest_button.innerHTML = 'Invest in Venture';
	invest_button.addEventListener('click', () => {
		investInVenture(row.id);
	});

	actions_td.appendChild(delete_button);
	actions_td.appendChild(invest_button);

	tr.appendChild(actions_td);


	tr.appendChild(id_td);
	tr.appendChild(name_td);
	tr.appendChild(createdAt_td);
	tr.appendChild(phoneNumber_td);
	tr.appendChild(email_td);
	tr.appendChild(description_td);
	tr.appendChild(industries_td);
	tr.appendChild(fundingStage_td);
	tr.appendChild(websiteURL_td);
	tr.appendChild(fundingGoal_td);
	tr.appendChild(totalFunding_td);
	tr.appendChild(valuation_td);
	tr.appendChild(status_td);
	tr.appendChild(actions_td);

	venture_table.appendChild(tr);
};

const getVentureRows = async () => {
	const response = await fetch(`${BACKEND_URL}/ventures?limit=10&offset=0`);
	const data = await response.json();
	console.log('ventures', data);

	for (let row of data) {
		addVentureRowToTable(row);
	}
};


const deleteVentureRow = async (id) => {
	const endpoint = BACKEND_URL + '/ventures/' + id;
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
	const targetRow = document.getElementById('tr-venture-' + id);
	targetRow.remove();
};

const investInVenture = async () => {
	const amount = prompt('Enter the amount you want to invest: ');
	console.log(`You invested amount = ${amount}`);
};


addVenturesButton.addEventListener('click', () => {
	getVentureRows();
});


const ventureManageForm = document.getElementById('manage-venture-form');

function processVentureManageForm(e) {
	if (e.preventDefault) e.preventDefault();

	const data = new FormData(ventureManageForm);
	const formInputs = {
		name: undefined,
		phone_number: undefined,
		email: undefined,
		description: undefined,
		industries: undefined,
		funding_stage: undefined,
		website_url: undefined,
		funding_goal: undefined,
		total_funding: undefined,
		valuation: undefined,
		status: undefined,
	};

	for (const [name, value] of data) {
		if (!Object.hasOwn(formInputs, name)) continue;

		formInputs[name] = value;
	}

	console.log({ formInputs });

	if (
		!formInputs.name ||
		formInputs.name.trim() == '' ||
		!formInputs.phone_number ||
		formInputs.phone_number.trim() == '' ||
		!formInputs.email ||
		formInputs.email.trim() == '' ||
		!formInputs.description ||
		formInputs.description.trim() == '' ||
		!formInputs.industries ||
		formInputs.industries.trim() == '' ||
		!formInputs.funding_stage ||
		formInputs.funding_stage.trim() == '' ||
		!formInputs.website_url ||
		formInputs.website_url.trim() == '' ||
		!formInputs.funding_goal ||
		formInputs.funding_goal.trim() == '' ||
		!formInputs.total_funding ||
		formInputs.total_funding.trim() == '' ||
		!formInputs.valuation ||
		formInputs.valuation.trim() == '' ||
		!formInputs.status ||
		formInputs.status.trim() == ''
	) {
		alert('Invalid inputs');
		return false;
	}

	const submitData = async (input) => {
		const url = BACKEND_URL + '/ventures';

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

			addVentureRowToTable(row);
		} catch (err) {
			console.error(err);
			return false;
		}
	};

	submitData(formInputs);
}

ventureManageForm.addEventListener('submit', processVentureManageForm);



const ventureSelectID = document.getElementById('venture_select_id');

function addSelectVentureID() {
	fetch(BACKEND_URL + '/ventures?limit=10&offset=0')
		.then((res) => res.json())
		.then((data) => {
			data.forEach((venture) => {
				const option = document.createElement('option');
				option.textContent = `${venture.name}`;
				option.value = venture.id;
				ventureSelectID.appendChild(option);
			});
		});
}

const selectVentureResponseID = addSelectVentureID();