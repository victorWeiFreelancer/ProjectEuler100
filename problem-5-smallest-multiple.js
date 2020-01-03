function smallestMult(n) {
  // Good luck!
  var scm = 1;
  for(var i=2;i<=n;i++){
    if(isPrime(i)){
      var j = i;
      while(j<=n){
        j*=i;
      }
      if(j>n){
        j/=i;
      }
      scm*=j;
    }
  }
  return scm;
}

function isPrime(n) {
  for(var i=2 ; i<=Math.sqrt(n); i++){
    if(n%i === 0){
      return false;
    }
  }
  return true;
}

smallestMult(20);
