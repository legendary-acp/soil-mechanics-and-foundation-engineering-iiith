let s = [];
var start = 0;
let wtn = 1;
var change = 0;

function setup() {
	noStroke();
	stuff();
}

function draw() {
	var cnv = createCanvas(window.innerWidth * 0.73, window.innerHeight * 0.95);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);

	//not working
	if (change == window.innerHeight + window.innerWidth) {
		change = window.innerHeight + window.innerWidth;
		stuff();
	}
	background(255);



	fill(0);
	textSize(4 / 3 * window.innerWidth * 0.02);
	text('Consolidation Test', (windowWidth - width) / 2 + 5 * window.innerWidth * 0.02, window.innerWidth * 0.035);

	if (start % 2 == 1) {

	}
}

function strt() {
	start = 1;
	stuff();
	wtn = 1;
}

function stuff() {

}