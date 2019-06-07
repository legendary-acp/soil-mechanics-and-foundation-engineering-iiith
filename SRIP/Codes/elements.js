class soil {

    constructor(x1) {
        this.x = x1;
        this.width = 100;
        this.height = 60;
        this.y = 425;

    }

    compress() {
        this.y = this.y + 1;
        this.height = this.height - 1;
        this.show();
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

    move_down() {
        if(this.y2<425){
            this.y1 = this.y1 + 0.5;
            this.y2 = this.y2 + 0.5;
            this.y3 = this.y3 + 0.5;
        }
    }

    show() {
        fill(0)
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
};

/*
rect(100, 425, 200, 125);
rect(400, 375, 200, 175);
rect(700, 375, 200, 175);
rect(1000, 375, 200, 175);
*/