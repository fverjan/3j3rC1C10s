const Point = require('./Point')

class Rectangle{
    constructor(Pa,Pb){
    if(Pa instanceof Point && Pb instanceof Point){
        this.Pa=Pa;
        this.Pb=Pb;
    }else{
        throw new Error('Introduzca valores válidos')
    }
 }
toString(){
    return "Punto a ("+Pa.x+"x"+Pa.y+")"+" Punto b ("+Pb.x+","+Pb.y+")"
 }
}

module.exports = Rectangle