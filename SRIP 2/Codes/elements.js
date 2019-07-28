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
        if (this.height < (n / 100 * this.height)) {
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
