/* 
Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
    G -> C
    C -> G
    T -> A
    A -> U
*/
const RNA = require("./rnaNucleotides").RNANucleotides;

class Transcriptor {
	toRna(strand) {
		const strandArray = strand.split("");
		let finalString = "";
	
		for (let character of strandArray) {
			finalString += matchStrandWithCompliment(character);
		}

		return finalString;
	}
}

function matchStrandWithCompliment(character) {
	let compliment;
    
	switch (character) {
	case "G":
		compliment = RNA.Cytosine;
		break;
	case "C": 
		compliment = RNA.Guanine;
		break;
	case "T": 
		compliment = RNA.Adenine;
		break;
	case "A": 
		compliment = RNA.Uracil;
		break;
	default: 
		throw Error("Invalid input DNA.");

	}
    
	return compliment;
}

module.exports = {
	Transcriptor
};