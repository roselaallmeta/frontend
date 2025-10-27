const redirectURL = 'https://google.com';
const BACKEND_URL = 'http://localhost:8000';

// const login_form = document.getElementById('login-form');
// login_form.addEventListener('submit', async(e) => {
// 	e.preventDefault();
// });

console.log('Login.js loaded');
const email = document.getElementById('email');
const password = document.getElementById('password');



// - [ ]  Kur hap faqen, nese kjo userId eshte defined, bej redirect tek faqja kryesore
// - [ ]  Ne castin qe form submission is successful, ruaj userId te user-it ne local storage & bej redirect tek faqja kryesore


document.addEventListener('DOMContentLoaded', () => {
	loginCheck();
})

async function loginCheck() {
	const loginForm = document.getElementById('login-form');
	if(!loginForm) return;

	loginForm.addEventListener('submit', async(e) => {
		e.preventDefault();

		const email = document.getElementById('email');
		const password = document.getElementById('password');

		try {
			const response = await fetch(`${BACKEND_URL}/users/login`, {
				method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
					email: "email", 
					password: "password"}),
			});

			const data = await response.json();
	

			if(data.user_id) {
				window.location.href = redirectURL;
				alert('Welcome back!');
			}

			if(data) {
				localStorage.setItem("user_id" , data.user_id);
				window.location.href = redirectURL;
				alert('Welcome back!')
			}

			else {
				alert('Login failed');
			}
		}

		catch(e) {
			console.log(e);
			alert("Something went wrong.")
		}
	});
};


		





























// async function handleLogin(email, password) {
// 	const response = await fetch(`${BACKEND_URL}/users/login`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			email: email,
// 			password: password,
// 		}),
// 	});

// 	const data = await response.json();

// 	if (data.success) {
// 		localStorage.setItem("user_id", data.user_id);
// 		localStorage.getItem("user_id")
// 		console.log('data stored in local storage')
// 		window.location.href = redirectURL;

// 	} else {
// 		alert('Login failed');
// 	};
// };





// async function formSubmissionCheck() {
// 	const response = await fetch(`{BACKEND_URL}/users/login`, {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			email: email,
// 			password: password,
// 		}),
// 	});

// 	const data = await response.json();

// 	if (data.success) {
// 		localStorage.setItem('user_id', data.user_id);
// 		window.location.href = redirectURL;
// 	} else {
// 		alert('Login failed!');
// 	};
// };



// login_form.addEventListener('submit', async (e) => {
// 	e.preventDefault();

// 	// Get form data
// 	const data = new FormData(login_form);

// 	let formInputs = { email: undefined, password: undefined };

// 	for (const [name, value] of data) {
// 		if (!Object.hasOwn(formInputs, name)) continue;

// 		formInputs[name] = value;
// 	}

// 	console.log('Form inputs: ', { formInputs });

// 	if (formInputs.email !== validUser.email && formInputs.password !== validUser.password) {
// 		alert('Invalid password');
// 	} else {
// 		alert('Welcome back!');

// 		// Store data through cookies - explore Authentication first:
// 		// https://www.youtube.com/watch?v=LB_lBMWH4-s

// 		// Finally: Redirect user to correct URL:
// 		window.Location.href = redirectURL;
// 		return;
// 	}

// 	const url = BACKEND_URL + '/users';

// 	const loginData = async (formInputs) => {
// 		const url = BACKEND_URL + '/users';

// 		try {
// 			const res = await fetch(url, {
// 				method: 'POST',
// 				body: JSON.stringify(inputData),
// 			});

// 			const data = await res.json();

// 			if (!data) {
// 				alert('Invalid email or password.');
// 			}
// 		} catch (err) {
// 			console.error(err);
// 		}
// 	};
// });
