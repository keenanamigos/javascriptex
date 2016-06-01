function slasher(arr, howMany) {
  if (howMany === 0) {
    if (howMany > arr.length) {
      return [];
    }
    return arr;
  }  else {
    arr.splice(0, howMany); //splice() mutates the array so that returned values are eliminated
    return arr; //return updated array without spliced values 
  }
}

slasher([1, 2, 3], 2);
