function pentagonNumbers() {
  // Good luck!
  var ind = 2;
  var search = true;
  var pentagons = [1];
  var diff, sum;
  while(search){
    pentagons.push(pentagon(ind));
    for(var i=0; i<ind-1;i++){
      diff = pentagons[ind - 1] - pentagons[i];
      if( isPentagonal(diff) ){
        var sum = pentagons[ind - 1] + pentagons[i];
        var j = ind-1;
        while(pentagon(j-1)<sum){
          j += 1;
        }
        if( pentagon(j-1)==sum ){
          return diff;
        }
      }
    }
    ind += 1;
  }
}

function pentagon(n){
  return n*(3*n - 1)/2;
}

function isPentagonal(k){
  var nearK = Math.floor(Math.sqrt(2*k/3.0));
  var pentaNear = pentagon(nearK);
  if (pentaNear == k)return true;
  while( pentagon(nearK+1) < k ){
    nearK += 1;
  }
  if (pentagon(nearK)==k || pentagon(nearK+1)==k ) return true;
  return false;
}

pentagonNumbers();
