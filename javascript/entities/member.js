// console.log('member.js loaded');
// // const BACKEND_URL = 'http://localhost:8000';

// const addMembersButton = document.getElementById('member-button');
// const showMembersButton_td = document.createElement('button');
// showMembersButton_td.innerHTML = 'Show all member IDs';

// const memberSelect = document.getElementById('memberSelect');
// const memberTable = document.getElementById('member-table');

// //fix delete - response jep error , nderkoh behen delete nga db
// //fix undefined tek team_members



// const addMemberRowToTable = (row) => {
// 	const tr = document.createElement('tr');
// 	tr.id = 'tr-team-member-' + row.id;

// 	const teamId_td = document.createElement('td');
// 	teamId_td.innerHTML = row.team_id;

// 	const memberId_td = document.createElement('td');
// 	memberId_td.innerHTML = row.member_id;

// 	const actions_td = document.createElement('td');

// 	showMembersButton_td.addEventListener('click', () => {
// 		showAllMembers();
// 	});

// 	actions_td.appendChild(showMembersButton_td);

// 	const deleteButton_td = document.createElement('button');
// 	deleteButton_td.innerHTML = 'Leave Team';
// 	deleteButton_td.addEventListener('click', () => {
// 		deleteMembersRow(row.team_id, row.member_id);
// 	});

// 	actions_td.appendChild(deleteButton_td);

// 	// tr.appendChild(id_td);
// 	tr.appendChild(teamId_td);
// 	tr.appendChild(memberId_td);
// 	tr.appendChild(actions_td);

// 	memberTable.appendChild(tr);
// };

// showMembersButton_td.addEventListener('click', () => {
// 	showAllMembers();
// });

// const getMemberRows = async () => {
// 	const response = await fetch(`${BACKEND_URL}/team_members?limit=10&offset=0`);
// 	const data = await response.json();
// 	console.log('team_members', data);

// 	for (let row of data) {
// 		addMemberRowToTable(row);
// 	}
// };


// const showAllMembers = async () => {
// 	const response = await fetch(`${BACKEND_URL}/team_members?limit=10&offset=0`, {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});

// 	const existingMembers = [];
// 	const data = await response.json();

// 	// problemi qendronte sepse option.value by default eshte string, dhe kur ti i ben parseInt -- e kthen ne int sic e ke ne db id
// 	for (let option of memberSelect.options) {
// 		existingMembers.push(parseInt(option.value));
// 	}

// 	for (let row of data) {
// 		// diferenca e option.text dhe option.value ->
// 		// <option value="3">Alice</option>

// 		if (!existingMembers.includes(row.member_id)) {
// 			const option = document.createElement('option');
// 			option.value = row.member_id;
// 			option.text = 'Member with id: ' + row.member_id;
// 			memberSelect.appendChild(option);
// 		}
// 	}
// };

// fix delete

// const deleteMembersRow = async (team_id, member_id) => {
// 	const endpoint = `${BACKEND_URL}/team_members/${team_id}/${member_id}`;
// 	const response = await fetch(endpoint, {
// 		method: 'DELETE',
// 	});

// 	if (!response.ok) {
// 		alert('Something went wrong');
// 		return;
// 	}

// 	// const data = await response.json();
// 	console.log('DELETE', endpoint);

// 	const targetRow = document.getElementById('tr-member-' + team_id + member_id);
// 	targetRow.remove(row.team_id, row.member_id);
// };

// addMembersButton.addEventListener('click', () => {
// 	getMemberRows();
// });

// showMembersButton_td.addEventListener('click', () => {
// 	showAllMembers();
// });
