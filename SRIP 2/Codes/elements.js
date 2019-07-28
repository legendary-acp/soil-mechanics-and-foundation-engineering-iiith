var ch = wh * 0.95,
    strth = 0;

var cw = ww * 0.8,
    strtw = 0;

class soil {

    constructor(x1) {
        this.x = Math.floor(x1 / 1000 * ww * 0.73);
        this.width = Math.floor(100 / 1000 * ww * 0.73);
        this.height = Math.floor(60 / 610 * wh * 0.95);
        this.y = Math.floor(425 / 610 * wh * 0.95);
        this.ln = [];
        this.strk();

    }

    strk() {
        this.lh = Math.floor(425 / 610 * wh * 0.95) + 1;
        while (this.lh < (this.y + this.height)) {
            this.wid = 0;
            while (this.wid < (this.width * 0.88)) {
                this.dif = Math.floor(Math.random() * 10) + 2;
                this.wid += this.dif;
                this.ln.push([this.x + this.wid, this.lh, 1]);
            }
            this.lh += 5;
        }
    }

    move_left(n) {
        if (this.x > n)
            this.x = this.x - 1;
    }

    show() {
        fill(129, 60, 32);
        rect(this.x, this.y, this.width, this.height);
        this.it = 0;
        fill(0, 0, 0);
        stroke(0);
        strokeWeight(1);
        while (this.it < this.ln.length) {
            if (this.ln[this.it][1] > this.y)
                line(this.ln[this.it][0], this.ln[this.it][1], this.ln[this.it][0] + this.ln[this.it][2], this.ln[this.it][1]);
            this.it += 1;
        }
        noStroke();
    }
};

class upper_tool {
    constructor() {
        this.x2 = strtw + cw * 0.2;
        this.y2 = strth + 0.4 * ch;
        this.height2 = 0.05 * ch;
        this.width2 = ch * 0.2;

        this.x1 = this.x2;
        this.y1 = this.y2 + this.height2;
        this.height1 = ch * 0.15;
        this.width1 = this.height2;

        this.x3 = this.x2 + this.width2 - this.height2;
        this.y3 = this.y1;
        this.height3 = ch * 0.2;
        this.width3 = this.height2;

        
        this.x5 = this.x2 + this.width2;
        this.y5 = this.y2 + strth + 0.13 * ch;
        this.height5 = this.height2;
        this.width5 = strtw + 0.3 * cw;

        this.x4 = this.x5 + this.width5;
        this.y4 = this.y1;
        this.height4 = this.height2 + this.height3;
        this.width4 = this.height2;

        this.x6 = this.x5 + 0.1 * cw;
        this.y6 = 0.55 * ch;
        this.height6 = this.height2;
        this.width6 = 0.4 * cw;
        this.wdt = 0.05 * cw;

        this.x7 = this.x6 + 0.15 * cw;
        this.y7 = this.y2 + strth + 0.5 * ch;
        this.height7 = 0.05 * ch;
        this.width7 = 0.1 * cw;

        this.x8 = strtw + cw * 0.1;
        this.y8 = strth + ch * 0.2;
        this.height8 = ch * 0.75;
        this.width8 = ch * 0.025;

        this.x9 = this.x8;
        this.y9 = this.y8 + this.height8;
        this.height9 = this.width8;
        this.width9 = cw * 0.9;

        this.x10 = this.x5 +(this.width5/2) + 0.2 * cw;
        this.y10 = this.y2 + strth + 0.45 * ch;
        this.rad = 0.05 * ch;
    }

    show() {
        fill(0);
        rect(this.x1, this.y1, this.width1, this.height1);
        rect(this.x2, this.y2, this.width2, this.height2);
        rect(this.x3, this.y3, this.width3, this.height3);
        rect(this.x4, this.y4, this.width4, this.height4);
        rect(this.x5, this.y5, this.width5, this.height5);
        fill(0);
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