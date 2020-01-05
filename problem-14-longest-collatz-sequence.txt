function longestCollatzSequence(limit) {
  // Good luck!
  var longest = 0;
  var longestStart = 0;
  for(var i=1; i<limit;i++){
    var candidate = lengthCollatz(i);    
    if(longest < candidate){
      longest = candidate;
      longestStart = i;
    }
  }
  return longestStart;
}

function lengthCollatz(n){
  var length = 1;
  while(n>1){
    if(n%2==0){
      n /= 2;
    }else{
      n = 3*n + 1;
    }
    length += 1;
  }
  return length;
}

longestCollatzSequence(14);
