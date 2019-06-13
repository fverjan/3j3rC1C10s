const Point = require('./Point')
const isInteger = require('../math/isInteger')

class Square{
    constructor(Pa,l){
        if(Pa instanceof Point && isInteger(l)){
            this.Pa=Pa;
            this.l=l;
        }else{
            throw new Error('Introduzca valores válidos')
        }
    }
    toString(){
        return "Punto a ("+Pa.x+","+Pa.y+")"+"Lado ("+l+")"
    }
}

module.exports = Square