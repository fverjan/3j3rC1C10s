var careful = 3.1

careful = 1.3 //watch out

var carefull = null//worst

let price = 120.25 

let price = 20.125//SyntaxError, but jsshell

price = 110.12

price = null

const tax = 0.825

const tax = 0.825 //SyntaxError 

const sam = {first: 'Sam', age:2}

sam.age = 3 //however

const greet = 'dude'

typeof greet //string

greet[0] = 'r' //string are immutable, wont change

const pearl = Object.freeze({first: 'pearl', age: 1})

pearl //({first: 'pearl', age: 1})

pearl.age = 3 //note, wont change bc freeze

