function pandigitalPrime(n) {
  // Good luck!
  var arr = [];
  for( var i = 1; i<=n; i++){
    arr.push(i);
  }
  var largestPrime = 0;
  while(arr){
    var digA = parseInt(arr.join(''));
    if( digA%2 !=0 && isPrime(digA) && largestPrime< digA){
      largestPrime = digA;
      // console.log(largestPrime);
    }
    arr = permute(arr);
  }
  
  return largestPrime;
}

function isPrime(n) {
  for(var i=2 ; i<=Math.sqrt(n); i++){
    if(n%i === 0){
      return false;
    }
  }
  return true;
}

/*using algorithm Narayana Pandita in https://en.wikipedia.org/wiki/Permutation#Algorithms_to_generate_permutations
*/
function permute(arr){
  var i = findLargestInOrderIndex(arr);
  if(i>-1){
    // console.log(i)
    var j = findLargestIndexToSwap(arr, i);
    // console.log(j)
    swap(arr, i, j);
    // console.log(arr.slice(0, i+1))
    // console.log(arr.slice(i+1).reverse())
    arr = arr.slice(0, i+1).concat(arr.slice(i+1).reverse())
    // console.log(arr)
    return arr;
  }
  return false;
}

function findLargestInOrderIndex(arr){
  for(var i = arr.length - 2;i>=0;i--){
    if(arr[i]<arr[i+1]){
      return i;
    }
  }
  return -1;
}

function findLargestIndexToSwap(arr, k){
  for(var i = arr.length - 1;i> k;i--){
    if(arr[i]>arr[k]){
      return i;
    }
  }
  return -1;
}

function swap(arr, i, j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j]=temp;
}

pandigitalPrime(7);
