const Point = require('../../libs/fjvv/geometry/Point')

p = new Point(1, 2)
q = new Point(0, 0)

console.log(p.toString())
p.distance(q)
