function palindrome(str) {
  var removeChars = str.replace(/[^A-Z0-9]/gi,'').toLowerCase();
  if (removeChars === removeChars.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");
