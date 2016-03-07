function titleCase(str) {
  var splitString = str.split(" ");
  for (var i = 0; i < splitString.length; i++) {
      //For each substring, capitalize the first element and make the second-last elements lower case
      splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1).toLowerCase();
  }
  
  var joinString = splitString.join(" ");
  return joinString;
}

titleCase("I'm a little tea pot");