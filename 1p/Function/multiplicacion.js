var isNumber = function (x) {
    if (typeof x === 'number')
	return true;
    else
	return false;
}

function multiplicacion(a,b){
    if (isNumber(a) && isNumber(b)){
	return a*b;
    }
}

print(multiplicacion(4,6))