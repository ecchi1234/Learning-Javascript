/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  var words = x.split(" ");
  var max = 0;
  var maxIndex = 0;
  var sum = 0;
  for (i = 0; i < words.length; i++){
    sum = 0;
    for (j = 0; j < words[i].length; j++){
      sum += words[i].charCodeAt(j) - 'a'.charCodeAt(0);
    }
    if (sum > max){
      max = sum;
      maxIndex = i;
    }
  }
  return words[maxIndex];
}
