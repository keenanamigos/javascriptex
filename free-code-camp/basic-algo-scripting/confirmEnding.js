function confirmEnding(str, target) {
  var ends = str.endsWith(target);
  if (ends) {
    console.log(true);
  } else {
    console.log(false);
  }
}

confirmEnding("Bastian", "no");

/*The ends variable checks to see if any given string ends with the string or char
defined in the target*/
