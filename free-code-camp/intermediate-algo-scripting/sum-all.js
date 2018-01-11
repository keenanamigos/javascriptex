/** Problem
 * We'll pass you an array of two numbers. 
 * Return the sum of those two numbers and all numbers between them.
 * The lowest number will not always come first.
 */

function sumAll(arr) {
    const high = Math.max(...arr);
    const low = Math.min(...arr);
    let sum = 0;
    
    for (let i = low; i <= high; i++) {
      sum += i;
    }
    
    return sum;
  }

 /** Test Cases
  * sumAll([1, 4]) should return a number.
  * sumAll([1, 4]) should return 10.
  * sumAll([4, 1]) should return 10.
  * sumAll([5, 10]) should return 45.
  * sumAll([10, 5]) should return 45.
  */