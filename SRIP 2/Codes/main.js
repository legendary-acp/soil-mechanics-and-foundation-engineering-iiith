let ut;
var start = 0;
let wtn = 1;
var change = 0;
var ww = window.innerWidth,
	wh = window.innerHeight;

function init() {
	start = 1;
	stuff();
	wtn = 1;
	ut = new upper_tool();
	sl = new soil(ut);
}

function setup() {
	noStroke();
	stuff();
}

function draw() {
	var cnv = createCanvas(ww * 0.73, wh * 0.95);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	stuff();
	//not working
	if (change == wh + ww) {
		change = wh + ww;

	}
	background(255);



	fill(0);
	textSize(4 / 3 * ww * 0.02);
	text('Direct Shear Test', (windowWidth - width) / 2 + 5 * ww * 0.02, ww * 0.035);

	if (start % 2 == 1) {
		ut.show();
		sl.show();
	}
}



function stuff() {

}