function mutation(arr) {
  var firstElement = arr[0].toLowerCase();
  var secondElement = arr[1].toLowerCase();
  
  for (var i = 0; i < secondElement.length; i++) {
    if (firstElement.indexOf(secondElement[i]) === -1) {
      return false; //if first element of the array does not contain all the letters found in the second array
    } 
  }
  return true; //return true if first element contains all the letters in the second element 
}

mutation(["hello", "hey"]);
