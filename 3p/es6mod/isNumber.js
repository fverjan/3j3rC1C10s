//var isNumber = function (x){
function isNumber(x) {
    if (typeof x === 'number')
	return true;
    else
	return false;
}

export{isNumber};