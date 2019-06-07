let s = [],w = [];

function setup() {
	createCanvas(innerWidth - 20, innerHeight - 20);
	background(135, 206, 235);

	textSize(32);
	text('Consolidation Test', innerWidth/2-150, 50);

	noStroke();

	s[0] = new soil(250);
	s[1] = new soil(450);
	s[2] = new soil(650);
	s[3] = new soil(850);
	s[4] = new soil(1050);
	
	w[0] = new weight(450);
	w[1] = new weight(650);
	w[2] = new weight(850);
	w[3] = new weight(1050)
	
}

function draw() {
	background(135, 206, 235);

	textSize(32);
	text('Consolidation Test', innerWidth/2-150, 50);

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

