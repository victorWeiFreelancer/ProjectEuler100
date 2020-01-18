function digitCancellingFractions() {
  // Good luck!
  var d_prod = 1;
  var n_prod = 1;
  for( var m = 1; m<=9; m++){
    for( var i= 1; i<= 9; i++){
      for( var j = 1; j<=9 ; j++){
        if( i!= m && j!=m){
          var d = i*10 + m;
          var n = m*10 + j;
          if( d*j == n*i){
            d_prod *= i;
            n_prod *= j;
            // console.log(i, j)
          }
        }
      }
    }
  }
  for( var x = 2; x<=d_prod; x++){
    while( d_prod%x == 0 && n_prod%x == 0){
      d_prod/=x;
      n_prod/=x;
    }
  }

  return n_prod;
}

digitCancellingFractions();
