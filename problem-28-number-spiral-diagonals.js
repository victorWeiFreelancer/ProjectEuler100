function spiralDiagonals(n) {
  // Good luck!
  //deduction :
  // f(n+2)=f(n) + 4*(n+2)*(n+2) - 6*(n+1);
  // f(n+2)=f(n) + 4*n*n+10*n+10;
  if(n==1)return 1;
  return spiralDiagonals(n-2) + 4*n*n - 6*(n-1);
}

spiralDiagonals(1001);
