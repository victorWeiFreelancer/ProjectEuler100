function lexicographicPermutations(n) {
  // Good luck!
  if(n>factorial(10)) return false;
  var numDigits = n.toString().length;
  var digitsArr = [0,1,2,3,4,5,6,7,8,9], digitsHead = [];
  var numPermut = 1;
  var fact = factorial(numPermut);
  while( numPermut <= 10 && fact<=n){
    numPermut+=1;
    fact = factorial(numPermut);
  }
  if(numPermut<10){
    digitsHead = digitsArr.slice(0, 10 - numPermut);
    digitsArr = digitsArr.slice(10 - numPermut );
  }
  
  numPermut -=1;
  var digits = '';
  while(n>0){
    var i=0;
    var fac = factorial(numPermut);
    while(n >= fac){
      i+=1;
      n-=fac;
    }
    // n-= (i-1)*fac;
    digits+=digitsArr[i];
    digitsArr.splice(i, 1);
    // console.log(i, digitsArr);
    // console.log("n",n, digits );
    numPermut-=1;
  }
  digits = digitsHead.join('') + digits + digitsArr.join('');
  var num = parseInt(digits);
  console.log(num);
  return num;
}

function factorial(n){
  if(n<2)return 1;
  var prod = 1;
  for(var i=2; i<=n;i++){
    prod*=i;
  }
  return prod;
}

lexicographicPermutations(999999);
