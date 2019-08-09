var ch = wh * 0.95;

var cw = ww * 0.8;

class soil {

    constructor(ut) {
        this.x1 = ut.x5;
        this.x2 = ut.x5;
        this.width = ut.width5;
        this.y1 = ut.y5 + ut.height5;
        this.height = ut.y3 + ut.height3 - this.y1;
        this.y2 = this.y1 + this.height;
        this.ln = [];
        this.strk();

    }

    strk() {
        this.lh = this.y1 + 1;
        while (this.lh < (this.y2 + this.height - 5)) {
            this.wid = 0;
            this.dif = Math.floor(Math.random() * 10);
            while (this.wid + this.dif < this.width) {
                this.wid += this.dif;
                this.ln.push([this.x1 + this.wid, this.lh]);
                this.dif = Math.floor(Math.random() * 10);
            }
            this.lh += 5;
        }
    }

    move_left(n) {
        if (this.x2 > n)
            this.x2 = this.x2 - 1;
    }

    show() {
        stroke(129,60,32)
        fill(129, 60, 32);
        rect(this.x1, this.y1, this.width, this.height);
        rect(this.x2, this.y2, this.width, this.height);
        this.it = 0;
        fill(0, 0, 0);
        stroke(0);
        strokeWeight(1);
        while (this.it < this.ln.length) {
            line(this.ln[this.it][0], this.ln[this.it][1], this.ln[this.it][0] + 1, this.ln[this.it][1]);
            this.it += 1;
        }
        noStroke();
    }
};

class upper_tool {
    constructor() {
        this.x2 = cw * 0.2;
        this.y2 = 0.4 * ch;
        this.height2 = 0.05 * ch;
        this.width2 = ch * 0.2;

        this.x1 = this.x2;
        this.y1 = this.y2 + this.height2;
        this.height1 = ch * 0.15;
        this.width1 = this.height2;

        this.x3 = this.x2 + this.width2 - this.height2;
        this.y3 = this.y1;
        this.height3 = ch * 0.17;
        this.width3 = this.height2;


        this.x5 = this.x2 + this.width2;
        this.y5 = this.y2 + 0.13 * ch;
        this.height5 = this.height2;
        this.width5 = 0.3 * cw;

        this.x4 = this.x5 + this.width5;
        this.y4 = this.y2;
        this.height4 = this.height2 + this.height3;
        this.width4 = this.height2;

        this.x6 = this.x5 + 0.05 * cw;
        this.height6 = this.height2;
        this.y6 = this.y2 + 0.13 * ch - this.height6;
        this.width6 = 0.2 * cw;
        this.wdt = 0.05 * cw;

        this.x7 = this.x6 + 0.05 * cw;
        this.y7 = this.y6 - 0.05 * ch;
        this.height7 = 0.05 * ch;
        this.width7 = 0.1 * cw;

        this.x8 = cw * 0.1;
        this.y8 = ch * 0.2;
        this.height8 = ch * 0.75;
        this.width8 = ch * 0.025;

        this.x9 = this.x8;
        this.y9 = this.y8 + this.height8;
        this.height9 = this.width8;
        this.width9 = cw * 0.7;

        this.x10 = this.x7 + 0.05 * cw;
        this.y10 = this.y7 - 0.025 * ch;
        this.rad = 0.05 * ch;
    }

    show() {
        fill(153);
        stroke(153);
        rect(this.x1, this.y1, this.width1, this.height1);
        rect(this.x2, this.y2, this.width2, this.height2);
        rect(this.x3, this.y3, this.width3, this.height3);
        rect(this.x4, this.y4, this.width4, this.height4);
        rect(this.x5, this.y5, this.width5, this.height5);
        fill(255);
        strokeWeight(4)
        stroke(0)
        rect(this.x7, this.y7, this.width7, this.height7);
        fill(0);
        rect(this.x8, this.y8, this.width8, this.height8);
        rect(this.x9, this.y9, this.width9, this.height9);
        rect(this.x6, this.y6, this.width6, this.height6);
        triangle(this.x6, this.y6, this.x6, this.y6 + this.height,
            this.x6 - this.wdt, this.y6 + this.height);
        triangle(this.x6 + this.width6, this.y6, this.x6 + this.width6,
            this.y6 + this.height, this.x6 + this.wdt + this.width6, this.y6 + this.height);
        circle(this.x10, this.y10, this.rad);
    }
};