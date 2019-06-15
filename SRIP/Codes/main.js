let s = [],
	w = [];
var start = 0;

function setup() {
	var cnv = createCanvas(800, 600);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);
	background(255, 0, 200);

	noStroke();

	s[0] = new soil(100);
	s[1] = new soil(250);
	s[2] = new soil(400);
	s[3] = new soil(550);
	s[4] = new soil(700);

	w[0] = new weight(250);
	w[1] = new weight(400);
	w[2] = new weight(550);
	w[3] = new weight(700);

}

function draw() {
	background(135, 206, 235);

	textSize(32);
	text('Consolidation Test', (windowWidth - width) / 2 , 50);

	if (start == 1) {
		w[0].move_down();
		w[1].move_down();
		w[2].move_down();

		s[0].show();
		w[0].show();
		s[1].show();
		w[1].show();
		s[2].show();
		w[2].show();
		s[3].show();
	}
}

function temp() {
	start = 1;
}