function coinSums(n) {
  // Good luck!
  var dividers = [1, 2, 5, 10, 20, 50, 100, 200];
  var total = n;
  var count = 0;
  var limits = dividers.map((e, ind)=>Math.floor(total/dividers[ind]));
  //brutal force solution
  for(var a=0;a*dividers[7]<=total;a++){
    for(var b=0; b*dividers[6]+a*dividers[7]<=total;b++){
      for(var c=0; c*dividers[5]+b*dividers[6]+a*dividers[7]<=total;c++){
        for(var d=0; d*dividers[4]+c*dividers[5]+b*dividers[6]+a*dividers[7]<=total;d++){
          for(var e=0; e*dividers[3]+d*dividers[4]+c*dividers[5]+b*dividers[6]+a*dividers[7]<=total;e++){
            for(var f=0; f*dividers[2]+e*dividers[3]+d*dividers[4]+c*dividers[5]+b*dividers[6]+a*dividers[7]<=total;f++){
               for(var g=0; g*dividers[1]+f*dividers[2]+e*dividers[3]+d*dividers[4]+c*dividers[5]+b*dividers[6]+a*dividers[7]<=total;g++){
                 count+=1;
               }
            }
          }
        }
      }
    }
  }
  // console.log(count);
  return count;
}

coinSums(2);
