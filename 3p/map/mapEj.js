let doubleWM = function(list){
    return list.map(function(number){
        if(number===3){
            return "a";
        }else if(number===2){
            return "b";
        }else if(number===1){
            return "c";
        }else{
            return "Inválido";
        }
    })
}

let a=[1,2,3,4,5,2,1];
console.log(doubleWM(a));