function specialPythagoreanTriplet(n) {
 // Good luck!
 let sumOfabc = n;
 for(var a=1; a<n/3;a++){
     for(var b=a+1; a+2*b<n;b++){
         if(isPythagorean(a, b, n-a-b)){
             return a*b*(n-a-b);
         }
     }
 }
 
 return true;
}

function isPythagorean(a, b, c){
    return a*a+b*b === c*c;
}

specialPythagoreanTriplet(1000);
