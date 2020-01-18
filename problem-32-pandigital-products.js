function pandigitalProducts() {
  // Good luck!
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var productSet = {};
  while(arr = permute(arr)){
    // console.log(arr)
    var a = arr[0];
    var b = parseInt(arr.slice(1, 5).join(''));
    var c = parseInt(arr.slice(5).join(''));
    if(a*b==c){
      productSet[c] = 1;
      // console.log(a, b, c);
    }
    a = parseInt(arr.slice(0, 2).join(''));
    b = parseInt(arr.slice(2, 5).join(''));
    if(a*b==c){
      productSet[c] = 1;
      // console.log(a, b, c);
    }
  }
  var res = Object.keys(productSet).map(e=>parseInt(e)).reduce((prev, curr)=>prev+curr)
  // console.log(res);
  return res;
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

pandigitalProducts();
