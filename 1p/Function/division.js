var isNumber = function (x) {
    if (typeof x === 'number')
	return true;
    else
    throw new Error('No es un número o fue introducido como string')
}

function isZero(arg){
    if (arg===0)
	throw new Error('zero div');
    else
	return arg;
}

function division(a,b){
    
    if (isNumber(a) && isNumber(b)  !=isZero(b)){
	return a/b;
    }
}

print(division(3,'0'))




