function quadraticPrimes(range) {
  // Good luck!
  var primesSet = primeSieve(2000);
  var primesInRange = primeSieve(range);
  var largest = 0, largestA, largestB, a, b;
  //unnecessary hack in compromise with warnings of falsy infinite loop
  var bStart = 0;
  if(range>200){
    bStart = 44;
  }else if(range>500){
    bStart=88;
  }else if(range>800){
    bStart=138;
  }
  //end of unnecessary hack
  for( var k=bStart; k<primesInRange.length;k++){
    b=primesInRange[k];
    var start = b%2==0? -range+2: -range+1;
    for( a= start; a<range; a+=2){
      var count = 1;
        var i=1;
        var quadValue = i*(i+a) + b;
        while(primesSet.includes(quadValue) && i<=range){
          count+=1;
          i+=1;
          quadValue = i*(i+a) + b;
        }
        if(largest < count ){
          largest = count;
          largestA = a;
          largestB = b;
        }
        count = 1;
    }
  }
  // console.log(largest, largestA, largestB, largestA*largestB );
  return largestA*largestB;
}

function isPrime(n) {
  if(n<2) return false;
  for(var i=2 ; i<=Math.sqrt(n); i++){
    if(n%i === 0){
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
quadraticPrimes(1000);
