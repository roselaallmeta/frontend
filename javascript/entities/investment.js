console.log('investment.js loaded');
// const BACKEND_URL = 'http://localhost:8000';

const investment_table = document.getElementById('investment-table');
const addInvestmentButton = document.getElementById('investment-button');


// FIX UNDEFINED USER_ID DHE VENTURE_ID

const addInvestmentRowToTable = (row) => {
	const tr = document.createElement('tr');
	tr.id = 'tr-investment-' + row.id;

	const userId_td = document.createElement('td');
	userId_td.innerHTML = row.user_id;

	const ventureId_td = document.createElement('td');
	ventureId_td.innerHTML = row.venture_id;
	
	const title_td = document.createElement('td');
	title_td.innerHTML = row.title;

	const amount_td = document.createElement('td');
	amount_td.innerHTML = row.amount;

	const type_td = document.createElement('td');
	type_td.innerHTML = row.investment_type;

	const equityPercent_td = document.createElement('td');
	equityPercent_td.innerHTML = row.equity_percent;

	const currency_td = document.createElement('td');
	currency_td.innerHTML = row.currency;

	const investedOn_td = document.createElement('td');
	investedOn_td.innerHTML = row.invested_on;

	const description_td = document.createElement('td');
	description_td.innerHTML = row.description;

	const actions_td = document.createElement('button');
	actions_td.innerHTML = 'Delete Investment';
	actions_td.addEventListener('click', () => deleteInvestmentRow(row.id));

	// tr.appendChild(id_td);
	tr.appendChild(userId_td);
	tr.appendChild(ventureId_td);
	tr.appendChild(title_td);
	tr.appendChild(amount_td);
	tr.appendChild(type_td);
	tr.appendChild(equityPercent_td);
	tr.appendChild(currency_td);
	tr.appendChild(investedOn_td);
	tr.appendChild(description_td);
	tr.appendChild(actions_td);

	investment_table.appendChild(tr);
};


const getInvestmentRows = async () => {
	const response = await fetch(`${BACKEND_URL}/investments?limit=10&offset=0`);
	const data = await response.json();
	console.log(data);
	console.log('investments', data);

	for (let row of data) {
		addInvestmentRowToTable(row);
	}
};


const deleteInvestmentRow = async (id) => {
	const endpoint = BACKEND_URL + '/investments/' + id;

	const response = await fetch(endpoint, {
		method: 'DELETE',
	});

	if (!response.ok) {
		alert('Something went wrong');
		return;
	}

	const data = await response.json();
	console.log('DELETE', endpoint);

	const targetRow = document.getElementById('tr-investment-' + id);
	targetRow.remove();
};


addInvestmentButton.addEventListener('click', () => {
	getInvestmentRows();
});

const investmentManageForm = document.getElementById('manage-investment-form');


function processInvestmentManageForm(e) {
	if (e.preventDefault) e.preventDefault();

	const data = new FormData(investmentManageForm);
	const formInputs = {

		venture_id: undefined,
		user_id: undefined,
		name: undefined,
		amount: undefined,
		investment_type: undefined,
		equity_percent: undefined,
		currency: undefined,
		invested_on: undefined,
		description: undefined
	};

	for (const [name, value] of data) {
		if (!Object.hasOwn(formInputs, name)) continue;
		formInputs[name] = value;
	}

	console.log({ formInputs });

	if (
		// !formInputs.id || formInputs.id.trim() == '' ||

		!formInputs.user_id ||
		formInputs.user_id.trim() == '' ||
		!formInputs.venture_id ||
		formInputs.venture_id.trim() == '' ||
		!formInputs.name ||
		formInputs.name.trim() == '' ||
		!formInputs.amount ||
		formInputs.amount.trim() == '' ||
		!formInputs.investment_type ||
		formInputs.investment_type.trim() == '' ||
		!formInputs.equity_percent ||
		formInputs.equity_percent.trim() == '' ||
		!formInputs.currency ||
		formInputs.currency.trim() == '' ||
		!formInputs.description ||
		formInputs.description.trim() == ''
	) {
		alert('Invalid inputs');
		return false;
	}

	const submitData = async (input) => {
		const url = BACKEND_URL + '/investments';

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
				const message = 'No row received';

				alert(message);
				throw new Error(message);
			}

			addInvestmentRowToTable(row);
		} catch (err) {
			console.error(err);
			return false;
		}
	};
	submitData(formInputs);
}

investmentManageForm.addEventListener('submit', processInvestmentManageForm);