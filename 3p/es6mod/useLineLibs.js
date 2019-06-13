const Point = require('../../libs/fjvv/geometry/Point.js')
const Line = require('../../libs/fjvv/geometry/Line.js')

let x = new Point(1,2)
let y = new Point(0,0)

let line= new Line(x,y)

console.log(line.toString())