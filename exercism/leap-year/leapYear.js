/* Definition of a leap year on the Gregorian Calendar */
/* 
    Every year that is divisible by 4
    Except every year that is evenly divisible by 100
    Unless the year is also evenly divisible by 400
*/

class Year {
	constructor(year) {
		this.year = year;
	}
    
	/**
     * Check if the property value for the year is a leap year.
     * @param {none}
     * @return {Boolean} - Return true if the property value is a leap year and false otherwise.
     */
	isLeap() {        
		return validLeapYear(this.year);
	}
}

function isEvenlyDivisibleByFour(year) {
	return (year % 4 === 0);
}

function isEvenlyDivisibleByOneHundred(year) {
	return (year % 100 === 0);
}

function isEvenlyDivisibleByFourHundred(year) {
	return (year % 400 === 0);
}

function validLeapYear(year) {
	return (isEvenlyDivisibleByFour(year) && !isEvenlyDivisibleByOneHundred(year)) ||
           (isEvenlyDivisibleByFour(year) && isEvenlyDivisibleByOneHundred(year) && isEvenlyDivisibleByFourHundred(year));
}

module.exports = {
	Year
};