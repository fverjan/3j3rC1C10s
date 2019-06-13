const Point= require('./Point')

class Triangle{
    constructor(Pa,Pb,Pc){
        if(Pa instanceof Point && Pb instanceof Point && Pc instanceof Point){
            this.Pa=Pa;
            this.Pb=Pb;
            this.Pc=pc;
        }else{
            throw new Error('Introduzca número válidos')
        }
    }
    toString(){
        return "Punto A ("+Pa.x+","+Pa.y+")"+" Punto B ("+Pb.x+","+Pb.y+")"+" Punto C ("+Pc.x+","+Pc.y+")"
    }
}

module.exports = Triangle
