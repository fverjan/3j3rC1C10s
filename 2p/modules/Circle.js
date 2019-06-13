load('classPoint.js')
load('isNumber.js')

class Circle {
    constructor(point, r){
        if (point instanceof Point && isNumber(r)){
            this.point = points
            this.r = r
        } else {
            throw new error("Ponte al tiro vato")
        }
    };
    
    toString(){return this.point.x};
};

p1 = new Point