function random() {
    let random = "";
      for(let i = 0; i < 1000000; i++){
    random = random + "\n" + ((Math.random() * 1) + 0).toString();
  }

  document.getElementById("texto").innerHTML = random;

  }