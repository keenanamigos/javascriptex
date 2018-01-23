// Return an object a count of the occurence of all elements in a given array
const fruits = ["banana", "apple", "mango", "apple", "banana", "banana"];

function countOccurances(array) {
    let finalCount = {};

    for (let i = 0; i < fruits.length; i++) {
        if (finalCount.hasOwnProperty(fruits[i])) {
            finalCount[fruits[i]]++;
        } else {
            finalCount[fruits[i]];
            finalCount[fruits[i]] = 1;
        }
    }

    return finalCount;
}

console.log(countOccurances(fruits));