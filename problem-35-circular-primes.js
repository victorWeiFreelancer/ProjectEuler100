function circularPrimes(n) {
  // Good luck!
  var numberList = Array(n).fill(1);
  numberList[0]=0;
  numberList[1]=0;
  numberList[2]=1;
  var primeList ={}
  primeList[2]=2;
  for( var i = 3;i<n+1;i+=2){
    if(numberList[i]==1){
      if(i>2 && i.toString().split('').every(e=>e%2!=0)){
        primeList[i] = i;
      }
      for( var j = 2; j*i<n+1;j++){
        numberList[j*i] = 0;
      }
    }
  }
  var circularCount = 0;
  for (var p in primeList){
      var isCircular = true;
      var se = p;
      for(var i = 0;i < se.length; i++ ){
        se = se.substring(se.length-1)+se.substring(0, se.length-1);
        if(primeList[parseInt(se)]==undefined && !isPrime(parseInt(se))){
          isCircular = false;
          break;
        }
      }
      if(isCircular){
        circularCount+=1;
      }   
  }
  return circularCount;
}

function isPrime(n) {
  for(var i=2 ; i<=Math.sqrt(n); i++){
    if(n%i === 0){
      return false;
    }
  }
  return true;
}

circularPrimes(1000000);
