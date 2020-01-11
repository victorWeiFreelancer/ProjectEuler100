function reciprocalCycles(n) {
  // Good luck!
  var longest = 0;
  var num = 0;
  for( var i = 2; i<=n; i++ ){
    var length = 0;
    if(i%2 !== 0 && i%5 !==0){
      length = repeatingDecimalLength(i);
      if( longest<length){
        longest = length;
        num = i;
      }
    }
  }
  // console.log(num);
  return num;
}

function repeatingDecimalLength(n){
  var res = 10;
  var i=0;
  while( res != 10 || i < 1 ){
    res = (res % n) * 10;
    i+=1;
  }
  return i;
}

// console.log(repeatingDecimalLength(7))

// console.log(1/23)
reciprocalCycles(1000);
