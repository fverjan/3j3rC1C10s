var isNumber = function (x) {
    if (typeof x === 'number')
	return true;
    else
	return false;
}

function suma(a,b){
    if (isNumber(a) && isNumber(b)){
	return a+b;
    }
}

print(suma(4,6))
