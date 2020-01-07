function sumAmicableNum(n) {
  // Good luck!
  var sumOfAmis = 0;

  for(var a=2;a<n;a++){
    var b = divisorsSumOf(a);
    var c = divisorsSumOf(b);
    if( a === c && a!==b){//amicable number is found
      if(a<b){
        sumOfAmis += a + b;
      }
    }
  }
  console.log(sumOfAmis);
  return sumOfAmis;
}

function divisorsSumOf(n){
  if(n===1) return 0;
  var sum = 1;
  var sqrt = Math.sqrt(n);
  for(var i=2;i<sqrt;i++){
    if(n%i===0){
      var coDiv = n/i;
      sum+= i+coDiv;
    }
  }
  if( n%sqrt==0){//treat special case of square root divisor
    sum+=sqrt;
  }
  return sum;
}

// console.log(divisorsSumOf(25))
sumAmicableNum(10000);
