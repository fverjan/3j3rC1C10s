const Point= require('../../libs/fjvv/geometry/Point')
const Square= require('../../libs/fjvv/geometry/Square')

let a = new Point(1,2)
let l = 5

let square= new Square(a,l)

square.toString()