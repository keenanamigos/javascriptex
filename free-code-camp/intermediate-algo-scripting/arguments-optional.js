// Problem:
/**
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
 * Calling this returned function with a single argument will then return the sum:
    var sumTwoAnd = addTogether(2);

    sumTwoAnd(3) returns 5.

 * If either argument isn't a valid number, return undefined.
 */

// Solution
function addTogether(...numbers) {
    if (numbers.length === 0) {
        throw Error("No parameters were given.");
    }

    const lengthConstraint = 2;
    let sum = 0;

    for (const number of numbers) {
        if (validateArray(number, numbers, lengthConstraint)) {
        return undefined;
        } else if (numbers.length === 1) {
        return handleSingleArg(number);
        }
        
        sum += number;
    }

    return sum;
}

function handleSingleArg(num) {
    if (validateNum(num)) {
        return undefined;
    }

    return function(num2) {
        if (validateNum(num2)) {
            return undefined;
        } else {
            return (num + num2);
        }
    };
}

function validateArray(number, array, lengthConstraint) {
    if (isNaN(number) || (number.constructor !== Number) || array.length > lengthConstraint) {
        return true;
    }

    return false;
}

function validateNum(num) {
    if (isNaN(num) || (num.constructor !== Number)) {
        return true;
    }

    return false;
}

addTogether(2, 3);

// Test Cases
/**
 * addTogether(2, 3) should return 5.
 * addTogether(2)(3) should return 5.
 * addTogether("http://bit.ly/IqT6zt") should return undefined.
 * addTogether(2, "3") should return undefined.
 * addTogether(2)([3]) should return undefined.
 */