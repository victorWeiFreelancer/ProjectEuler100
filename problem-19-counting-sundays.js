function countingSundays(firstYear, lastYear) {
  // Good luck!
  var monCount = 0;
  for(var y=firstYear;y<=lastYear;y++){
    for(var m=1;m<=12;m++){
      var date = new Date(`${y}-${m}-01`);
      if( date.toString().startsWith("Sun") ){
        monCount+=1;
      }
      // console.log(date)
    }
  }
  return monCount;
}

countingSundays(1943, 1946);
