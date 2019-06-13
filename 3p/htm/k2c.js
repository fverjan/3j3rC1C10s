function convert() {
    let t = document.getElementById("temp").value
    let o = (t-273.15)
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees Celsius"
}