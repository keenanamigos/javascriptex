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

class Transcriptor {
	toRna(character) {
		return matchStrandWithCompliment(character);
	}
}

function matchStrandWithCompliment(character) {
	let compliment;

	switch (character) {
	case "G":
		compliment = "C";
		break;
	case "C": 
		compliment = "G";
		break;
	case "T": 
		compliment = "A";
		break;
	case "A": 
		compliment = "U";
		break;
	default: 
		throw Error("Invalid input DNA.");

	}

	return compliment;
}

module.exports = {
	Transcriptor
};