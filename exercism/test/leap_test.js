/* global describe it */
const expect = require("chai").expect;
const Year = require("../leap-year/leapYear").Year;

describe("A leap year", () => {
	it("year not divisible by 4: common year", () => {
		const year = new Year(2015);
		expect(year.isLeap()).to.be.false;
	});

	it("year divisible by 4, not divisible by 100: leap year", () => {
		const year = new Year(2016);
		expect(year.isLeap()).to.be.true;
	});

	it("year divisible by 100, not divisible by 400: common year", () => {
		const year = new Year(2100);
		expect(year.isLeap()).to.be.false;
	});

	it("year divisible by 400: leap year", () => {
		const year = new Year(2000);
		expect(year.isLeap()).to.be.true;
	});
});