var aPoint = {//literal objetc
    x:3,
    y:4
}

var bPoint ={//literal objetc
    x:-3,
    y:-4
}

function distance(p1,p2){
    return Math.sqrt((p2.x-p1.x)**2+((p2.y-p1.y)**2)) 
}

print(distance(aPoint,bPoint));