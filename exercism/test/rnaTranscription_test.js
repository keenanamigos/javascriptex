/* global describe it */
const expect = require("chai").expect;
const Transcriptor = require("../rna-transcription/rnaTranscription").Transcriptor;

describe("Transcriptor", () => {
	const transcriptor = new Transcriptor();

	it("transcribes cytosine to guanine", () => {
		expect(transcriptor.toRna("C")).to.equal("G");
	});

	it("transcribes guanine to cytosine", () => {
		expect(transcriptor.toRna("G")).to.equal("C");
	});

	it("transcribes adenine to uracil", () => {
		expect(transcriptor.toRna("A")).to.equal("U");
	});

	it("transcribes thymine to adenine", () => {
		expect(transcriptor.toRna("T")).to.equal("A");
	});

	it("transcribes all dna nucleotides to their rna complements", () => {
		expect(transcriptor.toRna("ACGTGGTCTTAA")).to.equal("UGCACCAGAAUU");
	});

	it("correctly handles invalid input", () => {
		expect(() => transcriptor.toRna("U")).to.throw(Error, "Invalid input DNA.");
	});

	it("correctly handles completely invalid input", () => {
		expect(() => transcriptor.toRna("XXX")).to.throw(Error, "Invalid input DNA.");
	});

	it("correctly handles partially invalid input", () => {
		expect(() => transcriptor.toRna("ACGTXXXCTTAA")).to.throw(Error, "Invalid input DNA.");
	});
});