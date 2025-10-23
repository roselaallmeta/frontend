const BACKEND_URL = 'http://localhost:8000';

console.log('page.js loaded');

// const userSelectButton = document.getElementById('select_user');
// const user_select = document.getElementById('user_select');


// import { user } from "./entities/user.js"; 
// import {userprofile} from "./entities/userprofile.js"; 
// import {venture} from "./entities/venture.js"; 
// import {team} from "./entities/team.js"; 
// import {member} from "./entities/member.js";
// import {investment} from "./entities/investment.js"; 


// const BACKEND_URL = 'http://localhost:8000'; 
console.log("App initalized with:" , {BACKEND_URL}) 




// import {BACKEND_URL} from './entities/investment.js';
// import {BACKEND_URL} from './entities/member.js';
// import {BACKEND_URL} from './entities/team.js';
// import {BACKEND_URL} from './entities/user.js';
// import {BACKEND_URL} from './entities/userprofile.js';
// import {BACKEND_URL} from './entities/venture.js';




// const pitch_table = document.getElementById('pitch-table');
// const addPitchButton = document.getElementById('pitch-button');

// const document_table = document.getElementById('document-table');
// const addDocumentButton = document.getElementById('document-button');

// const bankDetailsTable = document.getElementById('bank-table');
// const addBankDetailsButton = document.getElementById('bank-button');




//----------------------------------------------------------------



//-----------------------------------------------------------


//--------------------
//team member





// function getSelectMember() {

// 	const response = document.getElementById('rosela')
// 	response.addEventListener('click', () => {
// 		response.a

// 	})

	
// }







//------------------------



//----------------------

// const addPitchDeckRowToTable = (row) => {
// 	const tr = document.createElement('tr');
// 	tr.id = 'tr-pitch-' + row.id;

// 	const id_td = document.createElement('td');
// 	id_td.innerHTML = row.id;

// 	// const deckId_td = document.createElement('td');
// 	// deckId_td.innerHTML = row.id;

// 	const title_td = document.createElement('td');
// 	title_td.innerHTML = row.title;

// 	const file_td = document.createElement('td');
// 	file_td.innerHTML = row.file_url;

// 	const description_td = document.createElement('td');
// 	description_td.innerHTML = row.description;

// 	const created_td = document.createElement('td');
// 	created_td.innerHTML = row.created_at;

// 	const updated_td = document.createElement('td');
// 	updated_td.innerHTML = row.updated_at;

// 	const actions_td = document.createElement('button');
// 	actions_td.innerHTML = 'Delete Pitch';
// 	actions_td.addEventListener('click', () => {
// 		deletePitchRow(row.id);
// 	});

// 	tr.appendChild(id_td);
// 	// tr.appendChild(deckId_td);
// 	tr.appendChild(title_td);
// 	tr.appendChild(file_td);
// 	tr.appendChild(description_td);
// 	tr.appendChild(created_td);
// 	tr.appendChild(updated_td);
// 	tr.appendChild(actions_td);

// 	pitch_table.appendChild(tr);
// };

// const getPitchDeckRows = async () => {
// 	console.log('ran');

// 	try {
// 		const response = await fetch(`${BACKEND_URL}/pitch_decks`);
// 		const data = await response.json();

// 		console.log('pitch_decks', data);

// 		for (let row of data) {
// 			addPitchDeckRowToTable(row);
// 		}
// 	} catch (err) {
// 		document.getElementById('pitch-table').innerHTML = err.message;
// 	}
// };

//--------------------------


	


//---------------------------
// const addDocumentRowToTable = (row) => {
// 	const tr = document.createElement('tr');
// 	tr.id = 'tr-document-' + row.id;

// 	const id_td = document.createElement('td');
// 	id_td.innerHTML = row.id;

// 	const userId_td = document.createElement('td');
// 	userId_td.innerHTML = row.user_id;

// 	const title_td = document.createElement('td');
// 	title_td.innerHTML = row.title;

// 	const size_td = document.createElement('td');
// 	size_td.innerHTML = row.size;

// 	const issueDate_td = document.createElement('td');
// 	issueDate_td.innerHTML = row.issue_date;

// 	const expiryDate_td = document.createElement('td');
// 	expiryDate_td.innerHTML = row.expiry_date;

// 	const contentType_td = document.createElement('td');
// 	contentType_td.innerHTML = row.content_type;

// 	const actions_td = document.createElement('button');
// 	actions_td.innerHTML = 'Delete Document';
// 	actions_td.addEventListener('click', () => deleteDocumentRow(row.id));

// 	tr.appendChild(id_td);
// 	tr.appendChild(userId_td);
// 	tr.appendChild(title_td);
// 	tr.appendChild(size_td);
// 	tr.appendChild(issueDate_td);
// 	tr.appendChild(expiryDate_td);
// 	tr.appendChild(contentType_td);
// 	tr.appendChild(actions_td);

// 	document_table.appendChild(tr);
// };

// const getDocumentRows = async () => {
// 	const response = await fetch(`${BACKEND_URL}/documents/`);
// 	const data = await response.json();
// 	console.log('documents', data);

// 	for (let row of data) {
// 		addDocumentRowToTable(row);
// 	}
// };

// //--------------------------

// const addBankRowToTable = (row) => {
// 	const tr = document.createElement('tr');
// 	tr.id = 'tr-bank-details-' + row.id;

// 	const id_td = document.createElement('td');
// 	id_td.innerHTML = row.id;

// 	const userId_td = document.createElement('td');
// 	userId_td.innerHTML = row.user_id;

// 	const accountNumber_td = document.createElement('td');
// 	accountNumber_td.innerHTML = row.account_number;

// 	const iban_td = document.createElement('td');
// 	iban_td.innerHTML = row.iban;

// 	const bic_td = document.createElement('td');
// 	bic_td.innerHTML = row.bic;

// 	const bankName_td = document.createElement('td');
// 	bankName_td.innerHTML = row.bank_name;

// 	const bankCountry_td = document.createElement('td');
// 	bankCountry_td.innerHTML = row.bank_country;

// 	const currency_td = document.createElement('td');
// 	currency_td.innerHTML = row.currency;

// 	const balance_td = document.createElement('td');
// 	balance_td.innerHTML = row.balance;

// 	const isBankVerified_td = document.createElement('td');
// 	isBankVerified_td.innerHTML = row.is_bank_verified;

// 	const actions_td = document.createElement('button');
// 	actions_td.innerHTML = 'Delete Bank Details';

// 	actions_td.addEventListener('click', () => {
// 		deleteBankDetails(row.id);
// 	});

// 	tr.appendChild(id_td);
// 	tr.appendChild(userId_td);
// 	tr.appendChild(accountNumber_td);
// 	tr.appendChild(iban_td);
// 	tr.appendChild(bic_td);
// 	tr.appendChild(bankName_td);
// 	tr.appendChild(bankCountry_td);
// 	tr.appendChild(currency_td);
// 	tr.appendChild(balance_td);
// 	tr.appendChild(isBankVerified_td);
// 	tr.appendChild(actions_td);

// 	bankDetailsTable.appendChild(tr);
// };

// const getBankRows = async () => {
// 	const response = await fetch(`${BACKEND_URL}/bank-details?limit=10&offset=0`);
// 	const data = await response.json();
// 	console.log('bank-details', data, bankDetailsTable);

// 	for (let row of data) {
// 		addBankRowToTable(row);
// 	}
// };

//------------------------------------------------------


















// const deletePitchRow = async (id) => {
// 	const endpoint = BACKEND_URL + '/pitch_decks/' + id;
// 	const response = await fetch(endpoint, {
// 		method: 'DELETE',
// 	});

// 	if (!response.ok) {
// 		alert('Something went wrong');
// 		return;
// 	}

// 	const data = await response.json();
// 	console.log('DELETE', endpoint);

// 	const targetRow = document.getElementById('tr-pitch' + id);
// 	targetRow.remove();
// };

// const deleteDocumentRow = async (id) => {
// 	const endpoint = BACKEND_URL + '/documents/' + id;
// 	const response = await fetch(endpoint, {
// 		method: 'DELETE',
// 	});

// 	if (!response.ok) {
// 		alert('Something went wrong');
// 		return;
// 	}

// 	const data = await response.json();
// 	console.log('DELETE', endpoint);

// 	const targetRow = document.getElementById('tr-document-' + id);
// 	targetRow.remove();
// };

// const deleteBankDetails = async (id) => {
// 	const endpoint = BACKEND_URL + '/bank-details/' + id;
// 	const response = await fetch(endpoint, {
// 		method: 'DELETE',
// 	});

// 	if (!response.ok) {
// 		alert('Something went wrong');
// 	}

// 	const data = response.json();
// 	console.log('DELETE', endpoint);

// 	const targetRow = document.getElementById('tr-bank-details-' + id);
// 	targetRow.remove();
// };

//----------------------------------------------

// addPitchButton.addEventListener('click', () => {
// 	getPitchDeckRows();
// });












// addDocumentButton.addEventListener('click', () => {
// 	getDocumentRows();
// });

// addBankDetailsButton.addEventListener('click', () => {
// 	getBankRows();
// });

// addPitchButton.addEventListener('click', () => {
// 	getPitchDeckRows();
// });

//------------------------------------


//_------------------------------------------------









//------------------------------------------------



//--------------------------------------------------





//-------------------------------



//---------------------------------------------------



//-------------------------------------------------------------

// const pitchManageForm = document.getElementById('manage-pitch-form');

// function processPitchManageForm(e) {
// 	if (e.preventDefault) e.preventDefault();

// 	const data = new FormData(pitchManageForm);
// 	const formInputs = {
// 		venture_id: undefined,
// 		title: undefined,
// 		file_url: undefined,
// 		description: undefined,
// 		created_at: undefined,
// 		updated_at: undefined,
// 	};

// 	for (const [name, value] of data) {
// 		if (!Object.hasOwn(formInputs, name)) continue;
// 		formInputs[name] = value;
// 	}

// 	console.log({ formInputs });

// 	if (
// 		!formInputs.venture_id ||
// 		formInputs.venture_id.trim() == '' ||
// 		!formInputs.title ||
// 		formInputs.title.trim() == '' ||
// 		!formInputs.file_url ||
// 		formInputs.file_url.trim() == '' ||
// 		!formInputs.description ||
// 		formInputs.description.trim() == '' ||
// 		!formInputs.created_at ||
// 		formInputs.created_at.trim() == '' ||
// 		!formInputs.updated_at ||
// 		formInputs.updated_at.trim() == ''
// 	) {
// 		alert('Invalid inputs');
// 		return false;
// 	}

// 	const submitData = async (input) => {
// 		const url = BACKEND_URL + '/pitch_decks';

// 		try {
// 			const res = await fetch(url, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(input),
// 			});

// 			const row = await res.json();

// 			if (!row || !row?.id) {
// 				const message = 'No row received';

// 				alert(message);
// 				throw new Error(message);
// 			}

// 			addPitchDeckRowToTable(row);
// 		} catch (err) {
// 			console.error(err);
// 			return false;
// 		}
// 	};

// 	submitData(formInputs);
// }

// pitchManageForm.addEventListener('submit', processPitchManageForm);

//-----------------------------------------------



//-------------------------------------------------

// bej append brenda ktij select
//pastaj beji add tek domi ekzistues tek tabelat

// const getInvestmentRows = async () => {
// 	const response = await fetch(`${BACKEND_URL}/investments?limit=10&offset=0`);
// 	const data = await response.json();
// 	console.log('investments', data);

// 	for (let row of data) {
// 		addInvestmentRowToTable(row);
// 	}
// };

// the createElement created the node

// document": """
//         CREATE TABLE IF NOT EXISTS main.document (
//             id SERIAL PRIMARY KEY,
//             user_id INT NOT NULL REFERENCES main.users(user_id) ON DELETE CASCADE,
//             title VARCHAR(255),
//             size INT,
//             issue_date TIMESTAMP DEFAULT NOW(),
//             expiry_date TIMESTAMP DEFAULT NOW(),
//             content_type TEXT NOT NULL,
//             uploaded_by TEXT NOT NULL,
//             description TEXT,
//             uploaded_at TIMESTAMP DEFAULT NOW(),
//             status main.status NOT NULL

//FIX FILE UPLOAD IN PYDANTIC

// const documentManageForm = document.getElementById('manage-document-form');

// function processDocumentManageForm(e) {
// 	if (e.preventDefault) e.preventDefault();

// 	const data = new FormData(documentManageForm);
// 	const formInputs = {
// 		user_id: undefined,
// 		title: undefined,
// 		add_document: undefined,
// 		issue_date: undefined,
// 		expiry_date: undefined,
// 		content_type: undefined,
// 		uploaded_by: undefined,
// 		description: undefined,
// 		uploaded_at: undefined,
// 		status: undefined,
// 	};

// 	for (const [name, value] of data) {
// 		if (!Object.hasOwn(formInputs, name)) continue;
// 		formInputs[name] = value;
// 	}

// 	console.log({ formInputs });

// 	if (
// 		!formInputs.user_id ||
// 		formInputs.user_id.trim == '' ||
// 		!formInputs.title ||
// 		formInputs.title.trim == '' ||
// 		!formInputs.add_document ||
// 		formInputs.add_document.trim == '' ||
// 		!formInputs.issue_date ||
// 		formInputs.issue_date.trim == '' ||
// 		!formInputs.expiry_date ||
// 		formInputs.expiry_date.trim == '' ||
// 		!formInputs.content_type ||
// 		formInputs.content_type.trim == '' ||
// 		!formInputs.uploaded_by ||
// 		formInputs.uploaded_by.trim == '' ||
// 		!formInputs.description ||
// 		formInputs.description.trim == '' ||
// 		!formInputs.uploaded_at ||
// 		formInputs.uploaded_at.trim == '' ||
// 		!formInputs.status ||
// 		formInputs.status.trim == ''
// 	) {
// 		alert('Invalid inputs');
// 		return false;
// 	}

// 	const submitData = async (input) => {
// 		const url = BACKEND_URL + '/documents';

// 		try {
// 			const res = await fetch(url, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(input),
// 			});

// 			const row = await res.json();

// 			if (!row || !row.user_id) {
// 				const message = 'No row received';
// 				alert(message);

// 				throw new Error(message);
// 			}

// 			addDocumentRowToTable(row);
// 		} catch (err) {
// 			console.error(err);
// 			return false;
// 		}
// 	};

// 	submitData(formInputs);
// }

// documentManageForm.addEventListener('submit', processDocumentManageForm);

//-------------------------------------------------

// const bankManageForm = document.getElementById('manage-bank-form');

// function processBankManageForm(e) {
// 	if (e.preventDefault) e.preventDefault();

// 	const data = new FormData(bankManageForm);
// 	const formInputs = {
// 		user_id: undefined,
// 		account_number: undefined,
// 		iban: undefined,
// 		bic: undefined,
// 		bank_name: undefined,
// 		bank_country: undefined,
// 		currency: undefined,
// 		balance: undefined,
// 		is_bank_verified: undefined,
// 	};

// 	for (const [name, value] of data) {
// 		if (!Object.hasOwn(formInputs, name)) continue;
// 		formInputs[name] = value;
// 	}

// 	console.log({ formInputs });

// 	if (
// 		!formInputs.user_id ||
// 		formInputs.user_id.trim() == '' ||
// 		!formInputs.account_number ||
// 		formInputs.account_number.trim() == '' ||
// 		!formInputs.iban ||
// 		formInputs.iban.trim() == '' ||
// 		!formInputs.bic ||
// 		formInputs.bic.trim() == '' ||
// 		!formInputs.bank_name ||
// 		formInputs.bank_name.trim() == '' ||
// 		!formInputs.bank_country ||
// 		formInputs.bank_country.trim() == '' ||
// 		!formInputs.currency ||
// 		formInputs.currency.trim() == '' ||
// 		!formInputs.balance ||
// 		formInputs.balance.trim() == '' ||
// 		!formInputs.is_bank_verified ||
// 		formInputs.is_bank_verified.trim() == ''
// 	) {
// 		alert('Invalid inputs');
// 		return false;
// 	}

// 	const submitData = async (input) => {
// 		const url = BACKEND_URL + '/bank-details';

// 		try {
// 			const res = await fetch(url, {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json',
// 				},
// 				body: JSON.stringify(input),
// 			});

// 			const row = await res.json();

// 			if (!row || !row?.user_id) {
// 				const message = 'No row received';

// 				alert(message);
// 				throw new Error(message);
// 			}

// 			addBankRowToTable(row);
// 		} catch (err) {
// 			console.error(err);
// 			return false;
// 		}
// 	};

// 	submitData(formInputs);
// }

// bankManageForm.addEventListener('submit', processBankManageForm);
