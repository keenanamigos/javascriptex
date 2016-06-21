function bouncer(arr) {
  check = arr.filter(function(val) {
    return val; //filter method applies a callback function to each element and if a falsy value is found it's filtered out of the array
  });
  
  return check;
}

bouncer([1, null, NaN, 2, undefined]);
