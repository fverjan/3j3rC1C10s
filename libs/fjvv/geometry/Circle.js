const Point = require('./Point')
const isInteger = require('../math/isInteger')

class Circle{
    constructor(Pa,r){
        if(Pa instanceof Point && isInteger(r)){
            this.Pa=Pa;
            this.r=r;
        }else{
            throw new Error("Introduza números válidos")
        }
    }
    toString(){
        return "Punto a ("+Pa.x+","+Pa.y+")"+" Radio ("+r+")"
    }
}

module.exports = Circle