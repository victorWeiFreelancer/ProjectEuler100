function powerDigitSum(exponent) {
  // Good luck!
  var digitsArr = [1];
  for(var i=1; i<=exponent;i++){
    digitsArr = multipleArr(digitsArr);
    // console.log(digitsArr);
  }
  var sum = digitsArr.reduce((prev, curr)=>{
    return prev+curr;
  })
  
  return sum;
}

function multipleArr(arr){
  var doubleArr = arr.map((ele)=>ele*2);
  var len = doubleArr.length;
  for(var i=0;i<len;i++){
    if(doubleArr[i]>9){
      if(doubleArr[i+1]===undefined){
        doubleArr.push(1);
      }else{
        doubleArr[i+1]+=1;
      }
      doubleArr[i]%=10;
    }
  }
  return doubleArr;
}

powerDigitSum(128);
