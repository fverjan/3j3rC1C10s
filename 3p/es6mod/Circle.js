import{Point} from "./Point.js";
import{isNumber} from "./isNumber.js";

class Circle {
    constructor(point, r){
        if (point instanceof Point && isNumber(r)){
            this.point = point
            this.r = r
        } else {
            throw new error("Valores inválidos")
        }
    };
    
    toString(){return "Punto: "+this.point+" Radio: "+this.r};
};

export{Circle,Point};