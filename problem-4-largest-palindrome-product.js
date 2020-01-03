function largestPalindromeProduct(n) {
  // Good luck!
  var start = Math.pow(10, n-1);
  var end = start*10;
  var largest = 0;
  for(var i=start+1; i<end;i++){
    for(var j=i; j<end;j++){
      var product = i*j;
      if(isPalindromic(product) && largest < product){
        largest = product;
      }
    }
  }
  return largest;
}

function isPalindromic(n){
  var nString = n.toString();
  var nReverse = nString.split("").reverse().join("");
  return nString === nReverse;
}

largestPalindromeProduct(3);
