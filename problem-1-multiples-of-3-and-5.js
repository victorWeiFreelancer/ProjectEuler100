function multiplesOf3and5(number) {
  // Good luck!
  var threeSum = 0;
  for(var i=0;i<number;i+=3){
    threeSum += i;
  }
  var fiveSum = 0;
  for(var i=0;i<number;i+=5){
    fiveSum += i;
  }
  var fifteenSum = 0;
  for(var i=0;i<number;i+=15){
    fifteenSum += i;
  }
  return threeSum+fiveSum-fifteenSum;
}

multiplesOf3and5(1000);
