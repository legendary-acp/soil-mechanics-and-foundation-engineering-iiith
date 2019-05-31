class soil {

    let width = 200,
        height = 125,
        y = 425,
        x;
    constructor(x) {
        this.x = x;
    }

    function compress() {
        y=y+1;
        height=height-1;
        this.show();
    }

    function show() {
        rect(x,y,width,height);
    }
}

class weight {

    let width = 200,
        height = 125,
        y = 425,
        x;
    constructor(x) {
        this.x = x;
    }

    function compress() {
        y=y+1;
        height=height-1;
        this.show();
    }

    function show() {
        rect(x,y,width,height);
    }
}
