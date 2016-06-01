function truncateString(str, num) {
  if (str.length <= num) {
     return str; //return entire string unaltered
  } else if (num > 3) {
    return str.slice(0,num - 3).trim() + "..."; //discard the last three characters because the elipses count towards num
  } else if (num < 3) {
    return str.slice(0, num).trim() + "..."; //added .trim() to remove any unwanted whitespace
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);