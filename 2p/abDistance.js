var aPoint = {//literal objetc
    x:3,
    y:4
}

var bPoint ={//literal objetc
    x:-3,
    y:-4
}

function distance(aPoint,bPoint){
    return Math.sqrt((bPoint.x-aPoint.x)**2+((bPoint.y-aPoint.y)**2)) 
}

print(distance(aPoint,bPoint));