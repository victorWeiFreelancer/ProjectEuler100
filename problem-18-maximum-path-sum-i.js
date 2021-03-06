function maximumPathSumI(triangle) {
  // Good luck!
  //make a copy so that the function is pure;
  var copyTriangle = JSON.parse(JSON.stringify(triangle));
  // var copyTriangle = [...triangle];
  var dim = triangle.length;
  for(var i= dim - 1; i>0; i--){
    for(var j = 0;j < i; j++){
      copyTriangle[i-1][j] += copyTriangle[i][j]>=copyTriangle[i][j+1]? copyTriangle[i][j]:copyTriangle[i][j+1];
    }
  }
  return copyTriangle[0][0];
}
 
const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

maximumPathSumI(testTriangle);
// console.log(testTriangle);
