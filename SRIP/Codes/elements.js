class soil {

    constructor(x1) {
        this.x = x1;
        this.width = 100;
        this.height = 60;
        this.y = 425;

    }

    compress(n) {
        if (this.height > n) {
            this.y = this.y + 2;
            this.height = this.height - 2;
            console.log(this.height);
        }

    }
    expand(n) {
        if (this.height < n) {
            this.y = this.y - 1;
            this.height = this.height + 1;
        }
    }
    show() {
        fill(109, 88, 74);
        rect(this.x, this.y, this.width, this.height);
    }
}

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
            this.y1 = this.y1 + 2;
            this.y2 = this.y2 + 2;
            this.y3 = this.y3 + 2;
        } else if (this.y2 < n && wtn % 2 == 0) {
            this.y1 = this.y1 + 2;
            this.y2 = this.y2 + 2;
            this.y3 = this.y3 + 2;
        } else {
            wtn = wtn + 1;
        }
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
                text('10 Tonne', this.x1 + 20, this.y2 - 10);
                break;
        }
        fill(0);
    }
};