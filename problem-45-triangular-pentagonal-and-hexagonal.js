function triPentaHexa(n) {
  // Good luck!
  var k = 286;
  while(true){
    var triK = triangle(k);
    if( isPentagonal(triK) && isHexa(triK) ){
      return triK;
    }else{
      k+=1;
    }
  }
}

function isPentagonal(k){
  var nearK = Math.floor(Math.sqrt(2*k/3.0));
  var pentaNear = penta(nearK);
  if (pentaNear == k)return true;
  while( penta(nearK+1) < k ){
    nearK += 1;
  }
  if (penta(nearK)==k || penta(nearK+1)==k ) return true;
  return false;
}

function penta(n){
  return n*(3*n - 1)/2;
}


function isHexa(k){
  var nearK = Math.floor(Math.sqrt(k/2.0));
  var hexaNear = hexa(nearK);
  if (hexaNear == k)return true;
  while( hexa(nearK+1) < k ){
    nearK += 1;
  }
  if (hexa(nearK)==k || hexa(nearK+1)==k ) return true;
  return false;
}

function hexa(n){
  return n*(2*n - 1);
}

function triangle(n){
  return n*(n+1)/2;
}

triPentaHexa(40756);
