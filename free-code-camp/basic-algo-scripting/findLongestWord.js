function findLongestWord(str) {
    var splits = str.split(' ');
    var longest = splits.sort(function(a,b) {
        return a.length - b.length;
    })[splits.length - 1];
    
    return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

