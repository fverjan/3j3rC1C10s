function escribir() {
    let t="Texto por defecto"
    let w=t.split(" ")
    document.getElementById("out").innerHTML = "<p>" + t + "</p>"
    document.getElementById("car").innerHTML= "<p>" + "Numero de caracteres del texto: "+t.length+ "</p>"
    document.getElementById("wor").innerHTML = document.write("<p>" + "Numero de palabras en el texto: "+ w +  "</p>"


    
}