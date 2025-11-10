console.log('Init');

const BACKEND_URL = 'http://localhost:8000';
const REDIRECT_URL = 'http://localhost:3000/HTML/page.html';
const LOGIN_URL = 'http://127.0.0.1:3000/HTML/login.html';
const NEW_URL = 'https://www.google.com/';
const url = BACKEND_URL + '/users' + '/register';

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const role = document.getElementById('role');

const registerForm = document.getElementById('register-form');


const isStrongPassword = (p) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#%])[A-Za-z\d@$#%]{6,20}$/.test(p);

document.addEventListener('DOMContentLoaded', () => {
	registerUser();
});

async function registerUser() {
	if (!registerForm) return;

	registerForm.addEventListener('submit', async (e) => {
		e.preventDefault();

		const formInputs = {
			name: undefined,
			role: undefined,
			email: undefined,
			password: undefined,
		};

		const registerFormData = new FormData(registerForm);

		for (const [name, value] of registerFormData) {
			if (Object.hasOwn(formInputs, name)) formInputs[name] = value;
		}

		if (!formInputs.name || formInputs.name == '') {
			throw new Error('Name field cannot be empty');
		}

		if (
			!formInputs.email ||
			formInputs.email == '' ||
			!formInputs.email.includes('@') ||
			!formInputs.email.includes('.')
		) {
			throw new Error('Email not valid!');
		}

		if (!isStrongPassword(formInputs.password)) {
			throw new Error('Try another password.');
		}

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
			
			else {
				console.log('Form sucessful');
				window.location.href = REDIRECT_URL;
			}

			console.log('Form inputs: ', { formInputs });
		} catch (err) {
			console.error(err);
		}
	});
}



