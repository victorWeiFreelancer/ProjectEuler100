function champernownesConstant(n) {
  // Good luck!
  var prod = 1;
  var len = n.toString().length;
  for( var i = len;i>0;i--){
    var d = nThChampernowneDigit(n);
    prod*=d;
    n/=10;
  }
  return prod;
}

function nThChampernowneDigit(n){
  var nDigits = 1;
  var nShift = 9;
  while( n > nShift){
    nShift = (Math.pow(10, nDigits) - Math.pow(10, nDigits-1))*nDigits
    nDigits+=1;
    n -= nShift
    nShift = (Math.pow(10, nDigits) - Math.pow(10, nDigits-1))*nDigits
  }
  var posD = n%nDigits;
  var posS = (n - posD)/nDigits;
  if( posD == 0){
    posS -= 1;
    posD = nDigits - 1;
  }else{
    posD-=1;
  }
  
  var posI = posS + Math.pow(10, nDigits-1);
  // console.log(nDigits)
  var digit = posI.toString()[posD];
  return parseInt(digit);
}

champernownesConstant(100);
