function setup() {
	createCanvas(innerWidth - 20, innerHeight - 20);
	background(135, 206, 235);

	textSize(32);
	text('Consolidation Test', 50, 50);
	textAlign(CENTER, CENTER);

	//soil
	fill(109, 88, 74);
	stroke(127, 63, 120);

	const s1 = new soil(100);
	const w1 = new weight(100);
	
	s1.show();
	w1.show();
}

function draw() {
	
}

/*
rect(100, 425, 200, 125);
rect(400, 375, 200, 175);
rect(700, 375, 200, 175);
rect(1000, 375, 200, 175);
*/