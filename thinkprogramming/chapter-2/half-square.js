/* 
    ** Using JS instead of C++ which changes the constraints
    Write a program that produces a pattern of hash symbols shaped like half of a perfect 5 x 5 square (or a right triangle):
    #####
    ####
    ###
    ##
    #
*/

const triangleHeight = 5; // 5 x 5 square 
let hashSymbol = "#".repeat(triangleHeight);

for (let i = 0; i < triangleHeight; i++) {
    console.log(hashSymbol);
    hashSymbol = hashSymbol.substring(0, hashSymbol.length - 1);
}