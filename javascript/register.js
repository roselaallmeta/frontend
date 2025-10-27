console.log('Init');

const BACKEND_URL = 'http://localhost:8000';
const REDIRECT_URL = 'http://localhost:3000/HTML/app.html';
const LOGIN_URL = 'http://127.0.0.1:3000/HTML/login.html'
const NEW_URL= 'https://www.google.com/'
const url = BACKEND_URL + '/users';

const form = document.getElementById('register-form');
const isStrongPassword = (p) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/.test(p); 

if (form) console.log('Form found', form);


// ADD MORE AUTHENTICATION FOR PASSWORD 

const registerUser = async (formInputs) => {
	try {
		let res = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify(formInputs),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		if (!data) {
			alert('Invalid data');
		}

		return {
			success: true,
		}

		} catch (err) {
			console.error(err);
		}
};

form.addEventListener('submit', (e) => {
	e.preventDefault();

	console.log('Form submitted');

	let formInputs = {
		name: undefined,
		email: undefined,
		password: undefined,
		role: undefined,
		gender: undefined
	};

	const data = new FormData(form);

	for (const [name, value] of data) {
		if (Object.hasOwn(formInputs, name)) formInputs[name] = value;
	}

	console.log('Form inputs: ', { formInputs });

	if (
		!formInputs.email ||
		formInputs.email == '' ||
		!formInputs.email.includes('@') ||
		!formInputs.email.includes('.')
	) {
		// alert("Email not valid!");
		// return {
		// 	success: false,
		// 	errors: ['Email not valid'],
		// 	data: undefined
		// }
		throw new Error('Email not valid!');
	}

	if (!formInputs.name || formInputs.name == '') {
		throw new Error('Name field cannot be empty');
	}


	if(!isStrongPassword(formInputs.password)) {
		throw new Error('Password must be at least 12 chars with upper, lower, digit, symbol.');
	}


	if (formInputs.name == data.name , formInputs.email == data.email, data.password == data.password, formInputs.role == data.role, formInputs.gender == data.gender) {
		alert('User is already registered. Log in instead. You are getting redirected to login.');
		window.location.href = LOGIN_URL;
	}

	registerUser(formInputs);

	// fetch(url, {
	// 	method: 'POST',
	// 	// mode: 'cors',
	// 	body: JSON.stringify(formInputs),
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		// "X-PINGOTHER": "pingpong"
	// 	},
	// })
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		responseData = data;
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);

	// 		if (Array.isArray(err)) {
	// 			for (let error in err) {
	// 				alert(error);
	// 			}
	// 		}
	// 	});

	// if (!responseData) {
	// 	console.error('Response data undefined.');
	// 	return;
	// }

	// alert('Registered');
	// console.log('responseData', responseData);

	// Redirect if conditions are met... (Valid registration)
	// window.location.href = REDIRECT_URL;
});

// Mock:

// const response = {
// 		success: false,
// 		errors: [],
// 		data: null
// 	}

// function loadData() {
//           $.ajax({
//               type: "POST",
//               cache: false,
//               url:'http://localhost:3000/HTML/register.html',
//               crossDomain: true,
//               dataType: "json",
//               headers: { 'x-api-key': 'xoeNNQ9475PCAgLtNP18cTv6YTWWB2JFfOe', 'X-Amz-Date': '1/1/2000', 'X-Amz-Security-Token': 'xoeNNQ9475PCAgLtNP18cTv6YTWWB2JFfOe' },
//               success: function (response) {
//                   console.log("CORS is enabled");
// 									return success;
//               }

//           });
//       }
