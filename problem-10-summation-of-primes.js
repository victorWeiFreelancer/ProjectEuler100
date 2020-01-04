function primeSummation(n) {
  // Good luck!
  var sum = 0;
  for(var i=2;i<n;i++){
    if(isPrime(i)){
      sum+=i;
    }
  }
  return sum;
}

function isPrime(n) {
  for(var i=2 ; i<=Math.sqrt(n); i++){
    if(n%i === 0){
      return false;
    }
  }
  return true;
}

primeSummation(2000000);
