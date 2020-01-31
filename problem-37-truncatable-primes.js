function truncatablePrimes(c) {
  // Good luck!
  var primeList = primeSieve(800000);
  // console.log(primeList);
  var primeLen = primeList.length;
  var count=0;
  var sum = 0;
  var hasEven = /[0468]/
  for( var i=4; i<primeLen; i++){
    var pString = primeList[i].toString();
    if(pString.search(hasEven)==-1 && isTruncatable(pString, primeList)){
      count+=1
      sum += primeList[i];
      if(count==c){
        return sum;
      }
    }
  }
}

function isTruncatable(s, l){
  var strL = s.length;
  for( var i=1; i<strL;i++){
    if(!l.includes(parseInt(s.substring(i))) || !l.includes(parseInt(s.substring(0, strL - i)))){
      return false;
    }
  }
  return true;
}

function primeSieve(n){
  var numbers = new Array(n+1).fill(1);
  numbers[0]=0;
  numbers[1]=0;
  for(var i=2;i<=n;i++){
    if(numbers[i]!=0){
      for(var j=2; j*i<=n;j++){
        numbers[j*i]=0;
      }
    }
  }
  return numbers.map((e, ind)=>{
    return e===0? 0:ind;
  }).filter((e)=>e!==0);
}

truncatablePrimes(8);
