/* 
    ** Using JS instead of C++ which changes the constraints
    Write a program that produces a pattern of hash symbols shaped like a sideways triangle:

    #
    ##
    ###
    ####
    ###
    ##
    #
*/

let hashSymbol = "#";
const outputHeight = 7;
const trianglePeak = (outputHeight / 2) - 1;

for (let i = 0; i < outputHeight; i++) {
    console.log(hashSymbol);
    if (i < trianglePeak) {
        hashSymbol += "#";
    } else {
        hashSymbol = hashSymbol.substring(0, hashSymbol.length - 1);
    }
}