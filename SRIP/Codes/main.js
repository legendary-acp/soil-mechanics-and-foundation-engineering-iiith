let s = [],
	w = [],
	wtr = [];
var start = 0;
let wtn = 1;

function setup() {

	var cnv = createCanvas(1000, window.innerHeight - 25);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);

	background(255);
	noStroke();
	stuff();
}

function draw() {
	background(255);

	fill(0);
	textSize(32);
	text('Consolidation Test', (windowWidth - width) / 2 + 200, 50);

	s[0].show();
	w[0].show(0);
	wtr[0].show();
	s[1].show();

	w[1].show(1);
	wtr[1].show();
	s[2].show();

	w[2].show(2);
	wtr[2].show();
	s[3].show();

	if (start % 2 == 1) {

		if (wtn > 6) {
			w[3].show(3);
			s[4].show();
		}

		switch (wtn) {
			case 1:
				wtn = w[0].fall(wtn, 415,1);
				break;
			case 2:
				s[1].compress(50);
				wtr[0].flow1();
				wtn = w[0].fall(wtn, 420,1);
				break;
			case 3:
				wtn = w[1].fall(wtn, 415,2);
				break;
			case 4:
				s[2].compress(45);
				wtr[1].flow2();
				wtn = w[1].fall(wtn, 430,2);
				break;
			case 5:
				wtn = w[2].fall(wtn, 415,3);
				break;
			case 6:
				s[3].compress(40);
				wtr[2].flow3();
				wtn = w[2].fall(wtn, 435,3);
				break;
			case 7:
				s[4].expand(50);
				wtn = w[3].lift(wtn);
		}

	}
}

function strt() {
	if (start != 1)
		start = 1;
	else
		stuff();
	wtn = 1;
}

function stuff() {
	s[0] = new soil(100);
	s[1] = new soil(250);
	s[2] = new soil(400);
	s[3] = new soil(550);
	s[4] = new soil(700);

	w[0] = new weight(250);
	w[1] = new weight(400);
	w[2] = new weight(550);
	w[3] = new weight(700);

	wtr[0] = new water_patch(250);
	wtr[1] = new water_patch(400);
	wtr[2] = new water_patch(550);

	s[4].height = 40;
	s[4].y = 445;
	w[3].y1 = w[3].y2 = 435;
	w[3].y3 = 385;

	wtr[0].s1();
	wtr[1].s2();
	wtr[2].s3();

}