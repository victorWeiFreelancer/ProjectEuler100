function pandigitalMultiples() {
  // Good luck!
  var largest = 0;
  var pandi = /(?=.*1)(?=.*2)(?=.*3)(?=.*4)(?=.*5)(?=.*6)(?=.*7)(?=.*8)(?=.*9)/
  for( var i = 1; i<=9999; i++){
    var concat = i.toString();
    for( var j = 2; j<10;j++){
      concat+= (i*j).toString();
      if( concat.length==9 ){
        if(pandi.test(concat)){
          var pandiInt = parseInt(concat);
          // console.log(pandiInt)
          if(largest<pandiInt){
            largest = pandiInt
          }
        }
      }else if( concat.length > 9 ){
        break;
      }
    }
  }
  return pandiInt;
}

pandigitalMultiples();
