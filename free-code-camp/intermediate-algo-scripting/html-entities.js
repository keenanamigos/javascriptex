// Problem
/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

// Solution
const HTMLEntityMappings = {
    "Ampersand": "&amp;",
    "GreaterThan": "&gt;",
    "LessThan": "&lt;",
    "DoubleQuote": "&quot;",
    "Apostrophe": "&apos;"
};

function convertHTML(str) {
    // &colon;&rpar;
    str = setEntities(str.split(''));

    return str;
}

function setEntities(array) {
    for (let i = 0, length = array.length; i < length; i++) {
        switch(array[i]) {
        case "&":
            array[i] = HTMLEntityMappings.Ampersand;
            break;
        case ">":
            array[i] = HTMLEntityMappings.GreaterThan;
            break;
        case "<":
            array[i] = HTMLEntityMappings.LessThan;
            break;
        case "\"":
            array[i] = HTMLEntityMappings.DoubleQuote;
            break;
        case "'":
            array[i] = HTMLEntityMappings.Apostrophe;
            break;
        default:
            array[i] = array[i];
        }
    }
        
    return array.join('');
}

convertHTML("Dolce & Gabbana");

// Test Cases
/**
 * convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos
 * convertHTML("Sixty > twelve") should return Sixty &​gt; twelve
 * convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;
 * convertHTML("Shindler's List") should return Shindler&​apos;s List
 * convertHTML("<>") should return &​lt;&​gt;
 * convertHTML("abc") should return abc
 */