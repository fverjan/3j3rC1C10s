function convert() {
    let t = document.getElementById("uni").value
    let o = (t)/1.609
    document.getElementById("out").innerHTML = o.toFixed(2) + " millas"
}