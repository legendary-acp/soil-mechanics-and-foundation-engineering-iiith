class soil {

    constructor(x1) {
        this.x = x1;
        let width = 200,
        height = 125,
        y = 425;
        
    }

    compress() {
        y = y + 1;
        height = height - 1;
        this.show();
    }

    show() {
        rect(this.x, this.y, this.width, this.height);
    }
}

class weight {

    constructor(x) {
        this.x1 = x;
        var y1 = 200,
        x2 =this.x1 + 200,
        y2 = 200,
        x3 = (this.x1 + x2) / 2,
        y3 = 50;
    }

    move_down() {
        y1 = y1 + 1;
        y2 = y2 + 1;
        y3 = y3 + 1;

        this.show();
    }

    show() {
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
};