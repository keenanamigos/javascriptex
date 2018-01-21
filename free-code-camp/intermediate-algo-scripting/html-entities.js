// Problem
/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
    // &colon;&rpar;
    const strArray = str.split('');
    str = replaceChars(strArray);

    return str;
}

function replaceChars(array) {
    for (let i = 0; i < array.length; i++) {
        switch(array[i]) {
        case "&":
            array[i] = "&amp;";
            break;
        case ">":
            array[i] = "&gt;";
            break;
        case "<":
            array[i] = "&lt;";
            break;
        case "\"":
            array[i] = "&quot;";
            break;
        case "'":
            array[i] = "&apos;";
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