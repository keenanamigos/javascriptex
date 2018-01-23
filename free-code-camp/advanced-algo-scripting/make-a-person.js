// Problem
/**
 * Fill in the object constructor with the following methods below:getFirstName()
    getLastName()
    getFullName()
    setFirstName(first)
    setLastName(last)
    setFullName(firstAndLast)
 * Run the tests to see the expected output for each method.
 * The methods that take an argument must accept only one argument and it has to be a string.
 * These methods must be the only available means of interacting with the object.
 */

// Solution
var Person = function(firstAndLast) {
    var fullName = firstAndLast.trim();
    var firstName = firstAndLast.split(" ")[0];
    var lastName = firstAndLast.split(" ")[firstAndLast.split(" ").length - 1];

    this.getFullName = function() {
        return fullName; 
    };

    this.getFirstName = function() {
        return firstName;
    }

    this.getLastName = function() {
        return lastName;
    }

    this.setFirstName = function(first) {
        firstName = first;
        fullName = `${firstName} ${lastName}`;
    }

    this.setLastName = function(last) {
        lastName = last;
        fullName = `${firstName} ${lastName}`;
    }

    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast.trim();
        firstName = fullName.split(" ")[0];
        lastName = fullName.split(" ")[fullName.split(" ").length - 1];
    }
};

var bob = new Person('Bob Ross');
bob.getFullName();

// Test Cases
/**
 * Object.keys(bob).length should return 6.
 * bob instanceof Person should return true.
 * bob.firstName should return undefined.
 * bob.lastName should return undefined.
 * bob.getFirstName() should return "Bob".
 * bob.getLastName() should return "Ross".
 * bob.getFullName() should return "Bob Ross".
 * bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
 * bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
 * bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
 * bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
 * bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
 */