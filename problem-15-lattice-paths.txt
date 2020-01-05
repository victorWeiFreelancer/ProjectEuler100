function latticePaths(gridSize) {
  // Good luck!
  //it actually corresponds to the coefficient of the middle point for each Pascal's triangle of 2*gridSize, which can be calculated by cominatorial number of C(n,2n)
  if(gridSize === 1) return 1;
  if(gridSize === 2) return 2;
  var numerator = 1, denominator = 1;
  for(var i=1;i<gridSize;i++){
    numerator*=(gridSize+i);
    denominator*=i;
  }
  return numerator/denominator*2;
}

// function factorial(n){
//   var prod = 1;
//   while(n>1){
//     prod*=n;
//     n-=1;
//   }
//   return prod;
// }
latticePaths(4);
