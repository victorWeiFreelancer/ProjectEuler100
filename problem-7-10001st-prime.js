function nthPrime(n) {
  // Good luck!
  var counter = 1;
  var num = 2;
  while(counter < n){
    num++;
    if(isPrime(num)){
      counter +=1;
    }
  }
  return num;
}

function isPrime(n) {
  for(var i=2 ; i<=Math.sqrt(n); i++){
    if(n%i === 0){
      return false;
    }
  }
  return true;
}

nthPrime(10001);
