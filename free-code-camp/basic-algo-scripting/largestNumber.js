var finalArray = [];

function largestOfFour(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].sort(function(a,b) {
        return a-b;
    });
    var extract = arr[i].pop();
    finalArray.push(extract);
  }
  return finalArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);