function doubleBasePalindromes(n) {
  // Good luck!
  var doublePalinSum = 0;
  for(var i = 1;i<=n;i++){
    if(isDoublePalindromic(i)){
      doublePalinSum += i;
    }
  }
  // console.log(doublePalinSum)
  return doublePalinSum;
}

function isDoublePalindromic(n){
  var nString = n.toString();
  var nBinString = n.toString(2);
  var nReverse = nString.split("").reverse().join("");
  var nRevBinString = nBinString.split("").reverse().join("");
  return nString == nReverse && nBinString==nRevBinString;
}

doubleBasePalindromes(1000000);
