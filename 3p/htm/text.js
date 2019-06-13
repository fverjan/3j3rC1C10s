function calc(){
let texto = document.getElementById("texto").value;

document.getElementById("car").innerHTML = "Número de caracteres: " + texto.length

document.getElementById("pal").innerHTML = "<br>"+ "</br>"+ "Numero de palabras: " + (texto.split(" ").length);
 
let sent = (texto.split(".").length)+(texto.split(",").length)+(texto.split(";").length)-3

document.getElementById("sen").innerHTML = "Número de sentencias: " + sent 


}