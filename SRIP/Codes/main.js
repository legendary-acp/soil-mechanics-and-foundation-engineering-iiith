let s = [],
	w = [];
var start = 0;
let wtn = 1;

function setup() {
	var cnv = createCanvas(1000, 600);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);

	background(255);
	noStroke();

}

function draw() {
	background(255);

	fill(0);
	textSize(32);
	text('Consolidation Test', (windowWidth - width) / 2 + 200, 50);

	if (start % 2 == 1) {
		s[0].show();
		w[0].show(0);
		s[1].show();
		w[1].show(1);
		s[2].show();
		w[2].show(2);
		s[3].show();
		w[3].show(3);
		s[4].show();

		switch (wtn) {
			case 1:
				wtn = w[0].move_down(wtn, 415);
				break;
			case 2:
				s[1].compress(50);
				wtn = w[0].move_down(wtn, 420);
				break;
			case 3:
				wtn = w[1].move_down(wtn, 415);
				break;
			case 4:
				s[2].compress(45);
				wtn = w[1].move_down(wtn, 430);
				break;
			case 5:
				wtn = w[2].move_down(wtn, 415);
				break;
			case 6:
				s[3].compress(40);
				wtn = w[2].move_down(wtn, 435);
				break;
			case 7:
				s[4].expand(50);
				wtn=w[3].move_up(wtn);
		}

	}
}

function strt() {
	start = 1;
	stuff();
	wtn = 1;
}

function stuff() {
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

	
	s[4].height = 40;
	s[4].y = 445;
	w[3].y1 = w[3].y2 = 435;
	w[3].y3 = 385;

}