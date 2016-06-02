function chunkArrayInGroups(arr, size) {
  var finalArray = [], i;
  
  for (i = 0; i < arr.length; i += size) {
    /*loops through the original array and splits the array into subarrays containing *size* 
    amount of characters and adds the new arrays back into the array */
    finalArray.push(arr.slice(i, i + size));
  }
  
  return finalArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 7], 2);