// Problem:
/**
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 */

// Solution
function uniteUnique(...arr) {
    // Get a single array of all the elements in no specific order
    arr = arr.reduce((accumulator, currrentValue) =>
        accumulator.concat(currrentValue), []);

    // Remove duplicates in array
    for (let i = 0; i < arr.length; i++) {
        while (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            arr.splice(arr.lastIndexOf(arr[i]), 1);
            console.log(arr);
        }
    }

    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Test Cases
/**
 * uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]
 * uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]
 * uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]
 * uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
 */
  