const validUser = {
	email: 'test@test.com',
	password: 1234
}

const redirectURL = 'https://google.com';
const BACKEND_URL = 'http://localhost:8001';

let loggedIn = false;

// ---

// Code Section: Check that the user isn't already logged in - if they are > redirect to the correct URL;
// ---

// Add check here

// Redirect if the user is logged in


if (loggedIn) {
	window.location.href = redirectURL;
	//return;
}


const form = document.getElementById('login-form');

if (!form) {
	console.error('Form not found.')
}


form.addEventListener('submit', (e) => {
	e.preventDefault();

		// Get form data
	const data = new FormData(form);

	let formInputs = {email: undefined, password: undefined};

  for (const [name, value] of data) {
		if (!Object.hasOwn(formInputs, name)) continue;

		formInputs[name] = value
  }

	console.log('Form inputs: ', {formInputs});

	if (formInputs.email !== validUser.email && formInputs.password !== validUser.password) {
		alert('Invalid password');
	}

	else {
		alert('Welcome back!')


		// Store data through cookies - explore Authentication first:
		// https://www.youtube.com/watch?v=LB_lBMWH4-s

		
		// Finally: Redirect user to correct URL:
		window.Location.href = redirectURL;
		return;
	}


	const url = BACKEND_URL + '/users'



	const loginData = async (formInputs) => {
		const url = BACKEND_URL + '/users';
	

	try {
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(inputData),
		});

		const data = await res.json();

		if (!data) {
			alert("Invalid email or password.")
		}

		} catch (err) {
			console.error(err);
		}
};
})