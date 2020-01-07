function sumFactorialDigits(n) {
  // Good luck!
  var res = [1];
  for(var i = 2; i <= n; i++){
    res = multipleArr(res, i);
    if(i%5===0){
      res.shift();
    }
  }
  var resSum = res.reduce((prev, curr)=>{
    return prev+curr;
  });
  return resSum;
}

function multipleArr(arr, n){
  var multiplied = arr.map((a)=>a*n);
  var length = multiplied.length;
  for(var i=0;i<length;i++){
    multiplied[i] = arr[i]*n;
  }
  for(var i=0;i<length;i++){
    if(multiplied[i]>10){
      if(i<length-1){
        multiplied[i+1]+=(multiplied[i] - multiplied[i]%10)/10;
      }else{
        multiplied.push( (multiplied[i] - multiplied[i]%10)/10 );
      }
      multiplied[i] = multiplied[i]%10;
    }
  }
  while(multiplied[multiplied.length-1]>10){
    var m = multiplied[multiplied.length - 1];
    multiplied[multiplied.length - 1]=m%10;
    multiplied.push( (m - m%10)/10 );
  }
  // console.log(multiplied);
  return multiplied;
}
// console.log(sumFactorialDigits(25));

sumFactorialDigits(100);