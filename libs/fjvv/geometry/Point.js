const isInteger = require('../math/isInteger')

class Point{
    constructor(x,y){
        if(isInteger(x) && isInteger(y)){
            this.x=x;
            this.y=y;
        }
        else{
            this.x=0;
            thix.y=0;
        }
    }

        toString () {
            return "(" + this.x +"," +this.y+")";
        }
        distance(p) {
            return Math.sqrt((this.x-p.x)**2 + (this.y-p.y)**2)
        }
        clone() {
            return new Point (this.x,this.y)
        }
}

module.exports = Point