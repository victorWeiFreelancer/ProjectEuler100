function digitFactorial() {
  // Good luck!
  var sum = 0;
  var numbers = [];

  //set upper bound by calculation upperbound = 3*9!
  var upperBound = 3*362880;
  for(var i = 3;i<=upperBound;i++){
    if( i == digitFactSum(i)){
      numbers.push(i);
      sum+=i;
    }
  }

  return { sum, numbers };
}

function factorial(n){
  var prod = 1;
  while(n>1){
    prod*=n;
    n-=1;
  }
  return prod;
}

function digitFactSum(n){
  var digitFact = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e)=>factorial(e));
  return n.toString().split('').map(e=>digitFact[parseInt(e)]).reduce((prev, curr)=>prev+curr);
}

digitFactorial();
