console.log('Init');

const BACKEND_URL = 'http://localhost:8000';
const REDIRECT_URL = 'http://localhost:3000/HTML/app.html';
const LOGIN_URL = 'http://127.0.0.1:3000/HTML/login.html'
const NEW_URL= 'https://www.google.com/';
const url = BACKEND_URL + '/users' + '/register';

const form = document.getElementById('register-form');
const isStrongPassword = (p) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/.test(p); 

if (form) console.log('Form found', form);



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
		role: undefined
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
		throw new Error('Email not valid!');
	}

	if (!formInputs.name || formInputs.name == '') {
		throw new Error('Name field cannot be empty');
	}


	if(!isStrongPassword(formInputs.password)) {
		throw new Error('Password must be at least 12 chars with upper, lower, digit, symbol.');
	}


	if (formInputs.name == data.name , formInputs.email == data.email, data.password == data.password, formInputs.role == data.role) {
		alert('User is already registered. Log in instead. You are getting redirected to login.');
		window.location.href = LOGIN_URL;
	}

	registerUser(formInputs);

});

