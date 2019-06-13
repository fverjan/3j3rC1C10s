function init (){
    for(var i=1;i<100;i++){
        document.write(i)
        s=Math.sqrt(i);
     noFactorSoFar = true;
      for (f=2;f<=s;f++){
       r = i % f;
       if (r==0){
          noFactorSoFar = false;
          break;
       }
      }
      if (noFactorSoFar){
        document.write('Prime number')
        document.write("<br/>");
    }
}
}
init();