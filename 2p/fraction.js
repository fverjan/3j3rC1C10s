class Fraction {
    constructor( n, d ) {
      this.n = n
      this.d = d
    }
   
    sum ( f ) {
      let n = this.n * f.d + f.n * this.d  //Suma
      let d = this.d * f.d
      return new Fraction(n,d)
    }
    subt ( f ) {
      let n = this.n * f.d - f.n * this.d  //Resta
      let d = this.d * f.d
      return new Fraction(n,d)
    }
    div ( f ) {
      let n = this.n * f.d   //cruzado
      let d = this.d * f.n   //Cruzado
      return new Fraction(n,d)
    }
    mul ( f ) {
      let n = this.n * f.n  //Directo
      let d = this.d * f.d  //Directo
  
      return new Fraction(n,d)
    }

    euclides(a,b){
    while(b>0){
       
        if(a>b){
            a = a - b;
        }
        else{
            b = b - a;
        }
    }
    return a;
    }   

}
  