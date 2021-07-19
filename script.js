function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
	let colors = [
		'red', 'yellow', 'blue',
		'pink', 'gray', 'green',
	];

	let randomIndex = getRandomNumber(0, colors.length);
	return colors[randomIndex];
}

// task 2 
function createCell(w, h) {
	let board = document.querySelector('.board'); 
	let div = document.createElement('div'); 
	div.classList.add('cell'); 
	div.style.width = w+'px';
	div.style.height = h+'px';
	board.clientHeight = h;
	board.clientWidth = w;
	div.innerHTML = '0'; 
    board.appendChild(div);
    
	div.addEventListener('click', function() {
		this.innerHTML = (this.innerHTML * 1) + 1;
		this.style.backgroundColor = getRandomColor();
	});

	div.addEventListener('dblclick', function() {
		this.remove();
	});
}
//task 3
function addCells(bw, bh){
	let board = document.querySelector('.board');
	board.style.width = bw+'px';
	board.style.height = bh+'px';

	let count = bw/100 * bh/100;

	for(let i = 0; i < count; i++){
		createCell(100, 100);
	}
}
//task 4
let startButton = document.querySelector('#start');
let countButton = document.querySelector('#count');

startButton.addEventListener('click', function() {
		addCells(300, 300);
});
countButton.addEventListener('click', function() {
    addCounter();
});
// task 5 
function addCounter(){
    let cells = document.querySelectorAll('.cell');
}