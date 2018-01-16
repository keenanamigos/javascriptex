/* Determine if a given word is a palindrome */
// Definition: http://www.dictionary.com/browse/palindrome


function isPalindrome(word) {
    if (word !== null && word !== "") {
        const reverseWord = word.split('').reverse().join('');

        if (word === reverseWord) {
            return true;
        } else {
            return false;
        }
    }

    return false;
}

// Test cases
console.log(isPalindrome("map"));
console.log(isPalindrome("pap"));
console.log(isPalindrome("train"));
console.log(isPalindrome("madam"));
console.log(isPalindrome(null));
console.log(isPalindrome(""));