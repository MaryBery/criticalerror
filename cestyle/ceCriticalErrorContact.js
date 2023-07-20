const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const header = document.getElementById('header');
const calender = document.getElementById('right');
const middle = document.getElementById('middle');
const left = document.getElementById('left');
// const contact = document.getElementByClass('contact');


function toggleButton() {
	navList.classList.toggle('show');
	hamburgerButton.classList.toggle('show');
	header.classList.toggle('show');
	calender.classList.toggle('show');
	middle.classList.toggle('show');
	left.classList.toggle('show');
	// contact.classList.toggle('show');
};

hamburgerButton.addEventListener('click', toggleButton);
