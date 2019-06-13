let a=0;
function make(){
    fst=document.getElementById("arr")
    arr=[]
    arr.push(fst.split(",").value)
    console.log(arr)

    for(var i=0;i=arr.length-2;i++){
        if(arr[i]+arr[i+1]+arr[i+2]==0){
            a++

        }
    }
    document.getElementById("out").innerHTML="tamales"
}