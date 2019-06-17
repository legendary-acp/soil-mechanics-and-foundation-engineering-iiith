let s = [],
	w = [];
var start = 0;
let wtn = 1;

function setup() {
	var cnv = createCanvas(1000, 600);
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
	s[5] = new soil(850);

	w[0] = new weight(250);
	w[1] = new weight(400);
	w[2] = new weight(550);
	w[3] = new weight(700);
	w[4] = new weight(750);


}

function draw() {
	background(135, 206, 235);

	fill(0);
	textSize(32);
	text('Consolidation Test', (windowWidth - width) / 2 + 200, 50);

	if (start == 1) {
		s[0].show();
		w[0].show();
		s[1].show();
		w[1].show();
		s[2].show();
		w[2].show();
		s[3].show();
		w[3].show();
		s[4].show();

		switch (wtn) {
			case 1:
				wtn = w[0].move_down(wtn,415);
				break;
			case 2:
				s[1].compress(50);
				wtn = w[0].move_down(wtn,425);
				break;
			case 3:
				wtn = w[1].move_down(wtn,430);
				break;
			case 4:
				s[2].compress(45);
				wtn = w[1].move_down(wtn,435);
				break;
			case 5:
				wtn = w[2].move_down(wtn,440);
				break;
			case 6:
				s[3].compress(40);
				wtn = w[2].move_down(wtn,445);
				break;
			case 7:
				wtn = w[3].move_down(wtn,450);
				break;
			case 8:
				s[4].expand(55);
				wtn = w[3].move_down(wtn,455);
				break;
		}
	}
}

function temp() {
	start = 1;
}