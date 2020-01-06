function numberLetterCounts(limit) {
  // Good luck!
  
  var sum = 0;
  for(var i = 1; i<=limit; i++){
    sum+=numLetter(i);
  }
  return sum;
}

function numLetter(n){
  //ones = num letter of ["zero", "one", "two", ..., "nine"]
  var ones = [4, 3, 3, 5, 4, 4, 3, 5, 5, 4];
  //teens = num letter of ["ten", "eleven", "twelve", ..., "nineteen"]
  var teens = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
  //tens = num letter of ["place holder", "ten", "twenty", ..., "ninety"]
  var tens = [0, 3, 6, 6, 5, 5, 5, 7, 6, 6];
  var hundred = 7;
  var thousand = 8;
  var and = 3;

  if(n<10){
    return ones[n];
    }
  if(n>=10 && n<20){
    return teens[n-10];
  }
  if( n>=20 && n<100){
    if(n%10===0){
      return tens[n/10];
    }else{
      return tens[(n - n%10)/10] + ones[n%10];
    }
  }
  if( n>=100 && n<1000){
    if(n%100===0){
      return ones[n/100] + hundred;
    }else{
      return ones[(n-n%100)/100] + hundred + and + numLetter(n%100);
    }
  }
  if( n>=1000 && n<1000000){
    if(n%1000===0){
      return numLetter(n/1000) + thousand;
    }else{
      return numLetter((n-n%1000)/1000) + thousand + numLetter(n%1000);
    }
  }
}
// console.log(numLetter(42))
console.log(numberLetterCounts(150))
numberLetterCounts(5);
