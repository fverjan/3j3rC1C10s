function calc(){
let texto = document.getElementById("texto").value;

document.getElementById("car").innerHTML = "Numero de caracteres: " + texto.length

document.getElementById("pal").innerHTML = "Numero de palabras: " + (parseInt((texto.split(" ").length)) + parseInt((texto.split("\n").length-1)));
 
let sent = (texto.split(".").length)+(texto.split(",").length)+(texto.split(";").length)-3

document.getElementById("sen").innerHTML = "Numero de sentencias: " + sent 

document.getElementById("par").innerHTML = "Numero de parrafos: " + (texto.split("\n").length)

} 