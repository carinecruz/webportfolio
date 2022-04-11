import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'

const sendMail = document.getElementById('sendMail');

emailjs.init('5CByAeRjFRdVbRYoe');

sendMail.addEventListener('submit', (e) => {
	e.preventDefault();

	const gender = document.getElementById('genderSelect').value;
	const name = document.getElementById('name').value;
	const email = document.getElementById('emailAddress').value;
	const message = document.getElementById('message').value;

	emailjs.sendForm('contact_service', 'contact_form', {
		message: message,
		gender: gender,
		name: name,
		email: email
	})
	.then(function() {
                        alert('Message sent!');
                    }, function(error) {
                        alert('Message not sent');
                        console.log(error)
                    });

	alert(`Your message has been sent!`)

})