function distinctPowers(n) {
  // Good luck!
  var powerSets = {};
  for(var i=2;i<=n;i++){
    for(var j= 2; j<=n; j++){
      powerSets[Math.pow(i,j)]=1;
    }
  }
  var res = Object.keys(powerSets).length;
  // console.log(res);
  return res;
}

distinctPowers(15);
