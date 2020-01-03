function largestPrimeFactor(number) {
  // Good luck!
  var max = 2;
  for(var i = 2; i <= number; i++){
    if(number%i===0 && isPrime(i)){
      max = i;
    }
    while(number%max===0){
      number/=max;
    }
  }
  return max;
}

function isPrime(n) {
  for(var i=2 ; i<=Math.sqrt(n); i++){
    if(n%i === 0){
      return false;
    }
  }
  return true;
}

largestPrimeFactor(13195);
