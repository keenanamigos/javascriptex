function repeatStringNumTimes(str, num) {
  var repeatedString = "";
  for (var i = 0; i < num; i++) {
     repeatedString += str;
  }
  return repeatedString;
}

repeatStringNumTimes("abc", 3);

/*This function creates an empty 'repeatedString' variable and then loops the 
inputted 'str' variable back into the 'repeatedString' variable until the loop
stops at the inputted 'num'. The 'repeatedString' is then returned*/