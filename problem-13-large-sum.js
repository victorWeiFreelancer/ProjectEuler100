function largeSum(arr) {
  // Good luck!
  var sum = 0;
  arr.forEach((n)=>{
    sum += parseInt(n);
  })
  return parseInt(sum.toLocaleString('fullwide', {useGrouping:false}).substring(0,10));
}

// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
