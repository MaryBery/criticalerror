const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const header = document.getElementById('header');
const calender = document.getElementById('right');
const middle = document.getElementById('middle');
const left = document.getElementById('left');


function toggleButton() {
	navList.classList.toggle('show');
	hamburgerButton.classList.toggle('show');
	header.classList.toggle('show');
	calender.classList.toggle('show');
	middle.classList.toggle('show');
	left.classList.toggle('show');

};

hamburgerButton.addEventListener('click', toggleButton);
