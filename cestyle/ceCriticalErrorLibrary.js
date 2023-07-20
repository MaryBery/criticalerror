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


// music

const tile = document.getElementById('tile');
const bladeRunner = document.getElementById('bladeRunner');
const uno = document.getElementById('uno');

const tileBtn = document.getElementById('tileBtn');
const bladeRunnerBtn = document.getElementById('bladeRunnerBtn');
const unoBtn = document.getElementById('unoBtn');

const tileVid = document.getElementById('tileVid');
const bladeRunnerVid = document.getElementById('bladeRunnerVid');
const unoVid = document.getElementById('unoVid')

function toggleTile() {
	tile.classList.add('show');
	tileBtn.classList.add('show');
	if (bladeRunner.classList.contains('show')) {
		bladeRunner.classList.remove('show');
		bladeRunnerBtn.classList.remove('show');
		bladeRunnerVid.pause();
	}; 
	if (uno.classList.contains('show')) {
		uno.classList.remove('show');
		unoBtn.classList.remove('show');
		unoVid.pause();
	};
};

function toggleBladeRunner() {
	bladeRunner.classList.add('show');
	bladeRunnerBtn.classList.add('show');
	if (tile.classList.contains('show')) {
		tile.classList.remove('show');
		tileBtn.classList.remove('show');
		tileVid.pause();
	};
	if (uno.classList.contains('show')) {
		uno.classList.remove('show');
		unoBtn.classList.remove('show');
		unoVid.pause();
	};
};

function toggleUno() {
	uno.classList.add('show');
	unoBtn.classList.add('show');
	if(tile.classList.contains('show')){
		tile.classList.remove('show');
		tileBtn.classList.remove('show');
		tileVid.pause();
	};
	if (bladeRunner.classList.contains('show')) {
		bladeRunner.classList.remove('show');
		bladeRunnerBtn.classList.remove('show');
		bladeRunnerVid.pause();
	};

};


tileBtn.addEventListener('click', toggleTile);
bladeRunnerBtn.addEventListener('click', toggleBladeRunner);
unoBtn.addEventListener('click', toggleUno);

