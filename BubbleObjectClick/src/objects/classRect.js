
class Rectangle{

    constructor(x, y, c, l) {
        this._x = x;
        this._y = y;
        this._width = c;
        this._height = l;
    }


    move() {


        this._x = this._x + random(-5, 5);
        this._y = this._y + random(-5, 5);
       
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        rect(this.x, this.y, this._width, this._height);
    }
}

