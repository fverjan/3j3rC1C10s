let doubleFE = 
function(list) {
    let result= [];
    list.forEach(function(number){
        result.push(number*2);
        console.log(result)
    })
    return result;
}

let a=[5,4,3,2,1]
console.log(doubleFE(a));
