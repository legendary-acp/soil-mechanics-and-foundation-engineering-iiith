class soil {

    constructor(x1) {
        this.x = Math.floor(x1 / 1000 * window.innerWidth * 0.73);
        this.width = Math.floor(100 / 1000 * window.innerWidth * 0.73);
        this.height = Math.floor(60 / 610 * window.innerHeight * 0.95);
        this.y = Math.floor(425 / 610 * window.innerHeight * 0.95);
        this.ln = [];
        this.strk();

    }

    strk() {
        this.lh = Math.floor(425 / 610 * window.innerHeight * 0.95) + 1;
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

    compress(n) {
        if (this.height > n) {
            this.y = this.y + 1;
            this.height = this.height - 1;
        }
    }

    expand(n) {
        if (this.height < n) {
            this.y = this.y - 0.25;
            this.height = this.height + 0.25;
        }
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

class weight {
    constructor(x) {
        this.x1 = x / 1000 * window.innerWidth * 0.73;
        this.y1 = 250 / 610 * window.innerHeight * 0.95;
        this.x2 = this.x1 + (87/ 1000 * window.innerWidth * 0.73) ;
        this.y2 = 250 / 610 * window.innerHeight * 0.95;
        this.x3 = (this.x1 + this.x2) / 2;
        this.y3 = 190 / 610 * window.innerHeight * 0.95;
    }

    fall(wtn, n, spd) {
        if (this.y2 < n && wtn % 2 == 1) {
            this.y1 = this.y1 + (5 - spd);
            this.y2 = this.y2 + (5 - spd);
            this.y3 = this.y3 + (5 - spd);
        } else if (this.y2 < n && wtn % 2 == 0) {
            this.y1 = this.y1 + 1;
            this.y2 = this.y2 + 1;
            this.y3 = this.y3 + 1;
        } else
            wtn = wtn + 1;
        return wtn;
    }

    lift(wtn) {
        if (this.y2 > Math.floor(300 / 610 * window.innerHeight * 0.95)) {
            this.y1 = this.y1 - 2;
            this.y2 = this.y2 - 2;
            this.y3 = this.y3 - 2;
        } else
            wtn = wtn + 1;
        return wtn;
    }


    show(i) {
        fill(117);
        ellipse(this.x3, this.y3 - 12, 20, 20);
        fill(255);
        ellipse(this.x3, this.y3 - 12, 12, 12);
        fill(0)
        stroke(0);
        strokeWeight(20);
        strokeJoin(ROUND);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        noStroke();
        fill(255);
        textSize(4 / 6 * window.innerWidth * 0.02);
        switch (i) {
            case 0:
                text('1 T', (this.x1 + this.x2) / 2 , this.y2 - 10);
                break;
            case 1:
                text('5 T', (this.x1 + this.x2) / 2 - 5, this.y2 - 10);
                break;
            case 2:
                text('10 T', (this.x1 + this.x2) / 2 - 5, this.y2 - 10);
                break;
            case 3:
                text('10 T', (this.x1 + this.x2) / 2 - 5, this.y2 - 10);
                break;
        }
        fill(0);
    }
};

class water_patch {
    constructor(x1) {
        this.x = x1;
        this.y = 470;
        this.vx = [];
        this.vy = [];
    }

    s1() {
        this.vx[0] = this.x + 10;
        this.vy[0] = this.y;
        this.vx[1] = this.x + 15;
        this.vy[1] = this.y + 13;
        this.vx[2] = this.x + 30;
        this.vy[2] = this.y + 12;
        this.vx[3] = this.x + 40;
        this.vy[3] = this.y + 8;
        this.vx[4] = this.x + 50;
        this.vy[4] = this.y + 4;
        this.vx[5] = this.x + 60;
        this.vy[5] = this.y + 10;
        this.vx[6] = this.x + 85;
        this.vy[6] = this.y + 6;
        this.vx[7] = this.x + 90;
        this.vy[7] = this.y;
    }

    flow1() {
        this.i = 0;
        while (this.i < 8) {
            this.vy[this.i] += 5;
            this.i++;
        }
    }

    s2() {
        this.vx[0] = this.x;
        this.vy[0] = this.y - 5;
        this.vx[1] = this.x + 3;
        this.vy[1] = this.y + 10;
        this.vx[2] = this.x + 30;
        this.vy[2] = this.y + 10;
        this.vx[3] = this.x + 40;
        this.vy[3] = this.y + 8;
        this.vx[4] = this.x + 50;
        this.vy[4] = this.y + 12;
        this.vx[5] = this.x + 60;
        this.vy[5] = this.y + 13;
        this.vx[6] = this.x + 97;
        this.vy[6] = this.y + 12;
        this.vx[7] = this.x + 100;
        this.vy[7] = this.y - 2;
    }

    flow2() {
        this.i = 0;
        while (this.i < 8) {
            this.vy[this.i] += 1;
            this.i++;
        }
        this.vx[1]--;
        this.vx[6]++;
    }

    s3() {
        this.y -= 5;
        this.vx[0] = this.x;
        this.vy[0] = this.y - 5;
        this.vx[1] = this.x + 13;
        this.vy[1] = this.y;
        this.vx[2] = this.x + 10;
        this.vy[2] = this.y + 15;
        this.vx[3] = this.x + 40;
        this.vy[3] = this.y + 20;
        this.vx[4] = this.x + 60;
        this.vy[4] = this.y + 15;
        this.vx[5] = this.x + 90;
        this.vy[5] = this.y + 20;
        this.vx[6] = this.x + 92;
        this.vy[6] = this.y + 20;
        this.vx[7] = this.x + 100;
        this.vy[7] = this.y - 5;
    }

    flow3() {
        this.i = 0;
        while (this.i < 8) {
            this.vy[this.i] += 0.8;
            this.i++;
        }
        this.vx[6]++;
        this.vx[1]--;
    }

    show() {
        fill(0, 102, 255);
        noStroke();
        beginShape();
        curveVertex(this.vx[0], this.vy[0]);
        this.i = 0;
        while (this.i < 8) {
            curveVertex(this.vx[this.i], this.vy[this.i]);
            this.i++;
        }
        curveVertex(this.vx[7], this.vy[7]);
        endShape();
    }
}