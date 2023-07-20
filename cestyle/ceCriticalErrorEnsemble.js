const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('navList')
const header = document.getElementById('header')
const calender = document.getElementById('right')
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






const ensembleBio = document.getElementById('ensembleBio');
const maryBio = document.getElementById('maryBio');
const cameronBio = document.getElementById('cameronBio');
const michaelBio = document.getElementById('michaelBio');
const sebastianBio = document.getElementById('sebastianBio');
const andrewBio = document.getElementById('andrewBio');

const ensembleBtn = document.getElementById('ensembleBtn');
const maryBtn = document.getElementById('maryBtn');
const cameronBtn = document.getElementById('cameronBtn');
const michaelBtn = document.getElementById('michaelBtn');
const sebastianBtn = document.getElementById('sebastianBtn');
const andrewBtn = document.getElementById('andrewBtn');

function toggleEnsemble() {
	ensembleBio.classList.add('show');
	ensembleBtn.classList.add('show');
	if (maryBio.classList.contains('show')){
		maryBio.classList.remove('show');
		maryBtn.classList.remove('show');
	};
	if (cameronBio.classList.contains('show')) {
		cameronBio.classList.remove('show');
		cameronBtn.classList.remove('show');
	};
	if (michaelBio.classList.contains('show')) {
		michaelBio.classList.remove('show');
		michaelBtn.classList.remove('show');
	};
	if (sebastianBio.classList.contains('show')) {
		sebastianBio.classList.remove('show');
		sebastianBtn.classList.remove('show');
	};
	if (andrewBio.classList.contains('show')) {
		andrewBio.classList.remove('show');
		andrewBtn.classList.remove('show');
	};
}

function toggleMary() {
	maryBio.classList.add('show');
	maryBtn.classList.add('show');
	if (ensembleBio.classList.contains('show')){
		ensembleBio.classList.remove('show');
		ensembleBtn.classList.remove('show');
	};
	if (cameronBio.classList.contains('show')) {
		cameronBio.classList.remove('show');
		cameronBtn.classList.remove('show');
	};
	if (michaelBio.classList.contains('show')) {
		michaelBio.classList.remove('show');
		michaelBtn.classList.remove('show');
	};
	if (sebastianBio.classList.contains('show')) {
		sebastianBio.classList.remove('show');
		sebastianBtn.classList.remove('show');
	};
	if (andrewBio.classList.contains('show')) {
		andrewBio.classList.remove('show');
		andrewBtn.classList.remove('show');
	};
}

function toggleCameron() {
	cameronBio.classList.add('show');
	cameronBtn.classList.add('show');
	if (maryBio.classList.contains('show')){
		maryBio.classList.remove('show');
		maryBtn.classList.remove('show');
	};
	if (ensembleBio.classList.contains('show')){
		ensembleBio.classList.remove('show');
		ensembleBtn.classList.remove('show')
	};
	if (michaelBio.classList.contains('show')) {
		michaelBio.classList.remove('show');
		michaelBtn.classList.remove('show');
	};
	if (sebastianBio.classList.contains('show')) {
		sebastianBio.classList.remove('show');
		sebastianBtn.classList.remove('show');
	};
	if (andrewBio.classList.contains('show')) {
		andrewBio.classList.remove('show');
		andrewBtn.classList.remove('show');
	};
}

function toggleMichael() {
	michaelBio.classList.add('show');
	michaelBtn.classList.add('show');
	if (maryBio.classList.contains('show')){
		maryBio.classList.remove('show');
		maryBtn.classList.remove('show');
	};
	if (cameronBio.classList.contains('show')) {
		cameronBio.classList.remove('show');
		cameronBtn.classList.remove('show');
	};
	if (ensembleBio.classList.contains('show')){
		ensembleBio.classList.remove('show');
		ensembleBtn.classList.remove('show')
	};
	if (sebastianBio.classList.contains('show')) {
		sebastianBio.classList.remove('show');
		sebastianBtn.classList.remove('show');
	};
	if (andrewBio.classList.contains('show')) {
		andrewBio.classList.remove('show');
		andrewBtn.classList.remove('show');
	};
}

function toggleSebastian() {
	sebastianBio.classList.add('show');
	sebastianBtn.classList.add('show');
	if (maryBio.classList.contains('show')){
		maryBio.classList.remove('show');
		maryBtn.classList.remove('show');
	};
	if (cameronBio.classList.contains('show')) {
		cameronBio.classList.remove('show');
		cameronBtn.classList.remove('show');
	};
	if (michaelBio.classList.contains('show')) {
		michaelBio.classList.remove('show');
		michaelBtn.classList.remove('show');
	};
	if (ensembleBio.classList.contains('show')){
		ensembleBio.classList.remove('show');
		ensembleBtn.classList.remove('show')
	};
	if (andrewBio.classList.contains('show')) {
		andrewBio.classList.remove('show');
		andrewBtn.classList.remove('show');
	};
}

function toggleAndrew() {
	andrewBio.classList.add('show');
	andrewBtn.classList.add('show');
	if (maryBio.classList.contains('show')){
		maryBio.classList.remove('show');
		maryBtn.classList.remove('show');
	};
	if (cameronBio.classList.contains('show')) {
		cameronBio.classList.remove('show');
		cameronBtn.classList.remove('show');
	};
	if (michaelBio.classList.contains('show')) {
		michaelBio.classList.remove('show');
		michaelBtn.classList.remove('show');
	};
	if (sebastianBio.classList.contains('show')) {
		sebastianBio.classList.remove('show');
		sebastianBtn.classList.remove('show');
	};
	if (ensembleBio.classList.contains('show')){
		ensembleBio.classList.remove('show');
		ensembleBtn.classList.remove('show')
	};
}


ensembleBtn.addEventListener('click', toggleEnsemble);
maryBtn.addEventListener('click', toggleMary);
cameronBtn.addEventListener('click',toggleCameron);
michaelBtn.addEventListener('click', toggleMichael);
sebastianBtn.addEventListener('click', toggleSebastian);
andrewBtn.addEventListener('click', toggleAndrew);










