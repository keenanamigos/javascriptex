function steamrollArray(arr) { 
    // Solution
    if (!Array.isArray(arr)) {
        throw new Error(`${arr} is not an Array.`);
    } 

    for (let i = 0; i < arr.length; i++) {
        arr = arr.reduce((acc, current) => acc.concat(current), []);
    }

    return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

/* Test Cases */
/**
 * steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]
 * steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4]
 * steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4]
 * steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]
 */