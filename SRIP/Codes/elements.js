class soil {

    constructor(x1) {
        this.x = x1;
        this.width = 100;
        this.height = 60;
        this.y = 425;
        this.ln = [];
        this.lines();
        
    }

    lines() {
        this.lh = 426;
        while(this.lh < 485){
            this.wid = 0;
            while(this.wid<88){
                this.dif = Math.floor(Math.random() * 10) + 2;
                this.wid += this.dif;
                this.ln.push([this.x + this.wid, this.lh, 1]);
            }
            this.lh += 5;
        }
    }

    compress(n) {
        if (this.height > n) {
            this.y = this.y + 4;
            this.height = this.height - 4;
        }
    }

    expand(n) {
        if (this.height < n) {
            this.y = this.y - 1;
            this.height = this.height + 1;
        }
    }

    show() {
        fill(129, 60, 32);
        rect(this.x, this.y, this.width, this.height);
        this.it = 0;
        fill(0,0,0);
        stroke(0);
        strokeWeight(1);
        while (this.it < this.ln.length) {
            if(this.ln[this.it][1]>this.y)
            line(this.ln[this.it][0], this.ln[this.it][1], this.ln[this.it][0] + this.ln[this.it][2], this.ln[this.it][1]);
            this.it += 1;
        }
        noStroke();
    }
};

class weight {
    constructor(x) {
        this.x1 = x + 7;
        this.y1 = 250;
        this.x2 = this.x1 + 87;
        this.y2 = 250;
        this.x3 = (this.x1 + this.x2) / 2;
        this.y3 = 190;
    }

    move_down(wtn, n) {
        if (this.y2 < n && wtn % 2 == 1) {
            this.y1 = this.y1 + 4;
            this.y2 = this.y2 + 4;
            this.y3 = this.y3 + 4;
        } 
        else if (this.y2 < n && wtn % 2 == 0) {
            this.y1 = this.y1 + 4;
            this.y2 = this.y2 + 4;
            this.y3 = this.y3 + 4;
        } 
        else 
            wtn = wtn + 1;        
        return wtn;
    }

    move_up(wtn) {
        if (this.y2 > 300) {
            this.y1 = this.y1 - 2;
            this.y2 = this.y2 - 2;
            this.y3 = this.y3 - 2;
        } 
        else
            wtn = wtn + 1;
        return wtn;
    }

    show(i) {
        fill(0)
        stroke(0);
        strokeWeight(20);
        strokeJoin(ROUND);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        noStroke();
        fill(255);
        textSize(15);
        switch (i) {
            case 0:
                text('1 Tonne', this.x1 + 20, this.y2 - 10);
                break;
            case 1:
                text('5 Tonne', this.x1 + 20, this.y2 - 10);
                break;
            case 2:
                text('10 Tonne', this.x1 + 15, this.y2 - 10);
                break;
            case 3:
                text('10 Tonne', this.x1 + 15, this.y2 - 10);
                break;
        }
        fill(0);
    }
};