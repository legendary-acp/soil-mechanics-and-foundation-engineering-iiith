let s1,w1;

function setup() {
	createCanvas(innerWidth - 20, innerHeight - 20);
	background(135, 206, 235);

	textSize(32);
	text('Consolidation Test', 50, 50);
	textAlign(CENTER, CENTER);

	//soil
	fill(109, 88, 74);
	stroke(127, 63, 120);

	s1 = new soil(100);
	w1 = new weight(100);
	
	// s1.show();
	w1.show();
	fullscreen();
}

function draw() {
	w1.move_down();
}

