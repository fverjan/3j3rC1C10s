class Point {
    constructor(x,y){
        if (typeof x === "undefined"){
            this.x = 0;
        } else {
            this.x= x;
        }
        
        if (typeof y === "undefined"){
            this.y = 0
        } else {
            this.y= y;
        }
    };

    toString(){return "("+this.x+","+this.y+")";};
    distance(p){return Math.sqrt((this.x-p.x)**2+((this.y-p.y)**2))};
    clone(){return new Point(this.x,this.y);};
};

export{Point};
