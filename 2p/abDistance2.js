var aPoint = {//literal objetc
    x:3,
    y:4,
    getDistance:function distance(p2){
        return Math.sqrt((p2.x-aPoint.x)**2+((p2.y-aPoint.y)**2))
        
    }
}

var bPoint ={//literal objetc
    x:-3,
    y:-4,
    getDistance:function distance(p1){
        return Math.sqrt((bPoint.x-p1.x)**2+((bPoint.y-p1.y)**2))
        
    }
}