function convert() {
    let t = document.getElementById("div").value
    let o = (t*1.13)
    document.getElementById("out").innerHTML = o.toFixed(2) + " Dolares"
}