
    class Bubble {
        constructor(x, y, r) {
            this._x = x
            this._y = y;
            this._r = r;
           
        }
        move() {


            this._x = this._x + random(-5, 5);
            this._y = this._y + random(-5, 5)
        }

        show() {
            stroke(255);
            strokeWeight(4);
            noFill();
            ellipse(this._x, this._y, this._r * 2);
          
        }

    }


