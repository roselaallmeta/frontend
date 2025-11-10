const redirectURL = 'https://google.com';
const REDIRECT_URL = 'http://localhost:3000/HTML/page.html';

console.log('Login.js loaded');

const email = document.getElementById('email');
const password = document.getElementById('password');


document.addEventListener('DOMContentLoaded', () => {
	loginCheck();
});


async function loginCheck() {

	const loginForm = document.getElementById('login-form');
	if (!loginForm) return;

	loginForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		

		try {
			const response = await fetch('http://localhost:8000/users/token/login', {
				method: 'POST',
				body: new URLSearchParams({
        'username': email.value,
        'password': password.value,
    })
			});

			
			const data = await response.json();
			localStorage.setItem('id', data.id);
			localStorage.getItem(data.id);
			

			if(data.id) {
				window.location.href = REDIRECT_URL;
				alert('Welcome back!');
				console.log('succ')
			}

			else {
				alert('Could not login. Check email and password.');
				return;
			}

			if (data) {
				if (email.value == data.email && password.value == data.password) {
					localStorage.setItem('id', data.id);
					window.location.href = REDIRECT_URL;
					alert('Welcome back!');
				}
			} else {
				alert('Login failed');
			}
		} catch (e) {
			console.error(e);
		}
	});
}


