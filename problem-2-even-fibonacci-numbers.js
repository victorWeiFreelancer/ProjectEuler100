function fiboEvenSum(n) {
  // You can do it!
  var sum = 0;
  var n0 = 0, n1 = 1, n2=1;
  for(var i=1; i<=n;i++){
    n2 = n1 + n0;
    n0 = n1;
    n1 = n2;
    if(n2%2===0){
      sum+=n1
    }
  }
  
  return sum;
}

fiboEvenSum(10);