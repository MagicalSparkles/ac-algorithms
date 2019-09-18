//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

//Input: a string
//Output: a number
//We need to look at the length of each word, we need to compare the length of each word with the others in the in the string. If a word is longer than the one that comes before it,we will replace the value of its length.

//Tools: a variable to store the length of the longest string
//.split() to change our string into an array
//For loop: run through the words 
  //conditional statement: check to see if the next word is longer than the length stored in the variable 
    //If true, I want to replace the value of the variable with the length of the longer word

// findLongestWord("May the force be with you") should return 5.

function findLongestWord(str) {
  //your code here
  let longestWord = 0;
  let array = str.split(" ");
  for(var i = 0; i < array.length; i++){
    if(array[i].length >= longestWord){
       longestWord = array[i].length
    }
  }
  console.log(longestWord);
  return longestWord
}
findLongestWord("May the force be with you");  
  
