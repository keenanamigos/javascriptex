
function destroyer(arr) {
  argsArray = Array.from(arguments); //returns an array arg as a sub-array and puts following arguments into an array
  
  var argsToTest = []; //array that will hold the additional arguments not part of the initial array
  
  for (var i = 1; i < arguments.length; i++) {
    argsToTest.push(arguments[i]); //push the additional args to the argsToTest array
  }
  
  removal = argsArray[0].filter(function(val) {
    return argsToTest.indexOf(val) < 0; //if the additional argument values match values in the array passed, remove those values from the array
  });

  return removal;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
