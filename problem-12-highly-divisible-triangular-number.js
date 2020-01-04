function divisibleTriangleNumber(n) {
  // Good luck!
  var nTri = 1;
  while(numDivisor(nTri*(nTri+1)/2)<=n){
    nTri+=1;
  }
  return nTri*(nTri+1)/2;
}

function numDivisor(n){
  var count = 2;
  for(var i = 2; i< Math.sqrt(n); i++){
    if(n%i==0){
      count+=2;
    }
  }
  if(n%Math.sqrt(n)==0){
    count+=1;
  }
  return count;
}
console.log(divisibleTriangleNumber(5))

divisibleTriangleNumber(500);
