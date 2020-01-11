function digitFibonacci(n) {
  // Good luck!
  var i = 1;
  while( fibonacci(i) <= Math.pow(10, n-1) ){
    i+=1;
  }
  return i;
}

function fibonacci(n){
  if( n<= 2) return 1;
  var sqrt5 = Math.sqrt(5);
  var res = ( Math.pow((1+sqrt5)/2, n) - Math.pow((1-sqrt5)/2, n))/sqrt5;
  return Math.round(res);
}

digitFibonacci(20);
