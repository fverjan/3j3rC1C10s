const Point = require('../../libs/fjvv/geometry/Point')
const Rectangle = require('../../libs/fjvv/geometry/Rectangle')

let a = new Point(1,2)
let b = new Point(3,4)

let rectangle = new Rectangle(a,b)

rectangle.toString()