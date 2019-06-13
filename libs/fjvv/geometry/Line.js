const Point = require('./Point')

class Line{
    constructor(Pa,Pb){
        if(Pa instanceof Point && Pb instanceof Point){
            this.Pa=Pa;
            this.Pb=Pb;
        }
        else{
            throw new Error('Debes introducir dos puntos')  
        }
    }
    
    toString(){
        return "Punto a ( "+Pa.x+","+Pa.y+")"+" Punto b ( "+Pb.x+","+Pb.y+")"
    }
}

module.exports = Line