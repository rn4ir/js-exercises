function findLongestWord(str) {
  var wordarr = str.split(' ');
  var wordLength = 0;
  var word = "";

  for (var i = 0; i < wordarr.length; i++) {
    if (wordarr[i].length > wordLength) {
      wordLength = wordarr[i].length;
      word = wordarr[i];
    }
  }

  return wordLength;
  //return word;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
