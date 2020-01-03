function sumSquareDifference(n) {
  // Good luck!
  return squareSum(n) - sumSquare(n);
}

function sumSquare(n) {
  var sum = 0;
  for(var i=1; i<=n; i++){
    sum+=i*i
  }
  return sum;
}

function squareSum(n){
  return n*n*(n+1)*(n+1)/4;
}

sumSquareDifference(100);
