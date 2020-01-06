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
  var multiplied = [...arr];
  for(var i=2;i<=n;i++){
    for(var j=0;j<arr.length;j++){
      var sum = multiplied[j]+arr[j];
      // console.log("sum", sum);
      if(sum<10){
        multiplied[j]=sum;
      }else{
        if(j<arr.length-1){
          multiplied[j]=sum - 10;
          multiplied[j+1]+=1;
        }else{
          if(multiplied.length>arr.length){
            multiplied[j+1]+=1;
          }else{
            multiplied.push(1);
          }
          multiplied[j]=sum - 10;
        }
      }
    }
    
    if(multiplied.length>arr.length){
      for(var k = arr.length;k<multiplied.length;k++){
        if(multiplied[k]===10){
          multiplied[k]=0;
          if(multiplied[k+1]< multiplied.length - 1){
            multiplied[k+1]+=1;
          }else{
            multiplied.push(1);
          } 
        }
      }
    }
    // console.log(multiplied);
  }
  return multiplied;
}
// console.log(sumFactorialDigits(100));

sumFactorialDigits(100);
