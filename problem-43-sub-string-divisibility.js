function substringDivisibility() {
  // Good luck!
  var arr=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var primes = [17,13,11,7,5,3,2];
  var doubleDigit= /([0]{2}|[1]{2}|[2]{2}|[3]{2}|[4]{2}|[5]{2}|[6]{2}|[7]{2}|[8]{2}|[9]{2})/
  var sol = [];
  for(var i=6;i*17<1000;i++){
    var sub17 = (i*17).toString();
    if(!doubleDigit.test(sub17)){
      var arr17 = [...arr];
      for( var j=0;j<3;j++){
        arr17.splice(arr17.indexOf(parseInt(sub17[j])),1);
      }
      subFilter(sol, primes, arr17, 1, sub17);
    }
  }
  
  sol.sort();
  swap(sol, 0, 1);
  swap(sol, 1, 2);
  swap(sol, 3, 4);
  swap(sol, 4, 5);
  // console.log(sol);
  return sol; 
}

function subFilter(so, p, a, i, sub){
  if( i<p.length){
    for(var j=0; j<a.length;j++){
      var s = a[j].toString()+sub.substring(0,2);
      if(parseInt(s)%p[i]==0){
        var subInc = a[j].toString() + sub;
        var aC = [...a];
        aC.splice(j, 1);
        subFilter(so, p, aC, i+1, subInc);
      }
    }
  }else{
    var aS = a.map((e)=>e.toString());
    so.push(parseInt(aS.join() + sub));
  }
}

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j]=temp;
}

substringDivisibility();
