function digitnPowers(n) {
  // Good luck!
  var maxNumDigits = (n+1)*Math.pow(9, n);
  var sum = 0;
  for(var i= 2; i<=maxNumDigits;i++){
    if(i==sumDigitsPower(i, n)){
      sum+=i;
    }
  }
  // console.log(sum);
  return sum;
}

function sumDigitsPower(x, p){
  var sum=0;
  while(x>=1){
    sum+=Math.pow(x%10, p);
    x=Math.floor(x/10);
  }
  return sum;
}

digitnPowers(5);
