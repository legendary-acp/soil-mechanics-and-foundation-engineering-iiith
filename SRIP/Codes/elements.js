class soil {

    constructor(x1) {
        this.x = x1;
        this.width = 100;
        this.height = 60;
        this.y = 425;

    }

    compress(n) {
        if (this.height > n) {
            this.y = this.y + 0.5;
            this.height = this.height - 0.5;
            console.log(this.height);
        }
        
    }
    expand(n){
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
        this.x1 = x;
        this.y1 = 250;
        this.x2 = this.x1 + 100;
        this.y2 = 250;
        this.x3 = (this.x1 + this.x2) / 2;
        this.y3 = 190;
    }

    move_down(wtn,n) {
        if (this.y2 < n && wtn % 2 == 1) {
            this.y1 = this.y1 + 0.5;
            this.y2 = this.y2 + 0.5;
            this.y3 = this.y3 + 0.5;
        }
        else if (this.y2 < n && wtn % 2 == 0) {
            this.y1 = this.y1 + 0.5;
            this.y2 = this.y2 + 0.5;
            this.y3 = this.y3 + 0.5;
        }
        else{
            wtn = wtn + 1;
        }
        return wtn;
    }

    show() {
        fill(0)
        stroke(0);
        strokeWeight(20);
        strokeJoin(ROUND);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
        noStroke();
    }
};

/*
rect(100, 425, 200, 125);
rect(400, 375, 200, 175);
rect(700, 375, 200, 175);
rect(1000, 375, 200, 175);
*/