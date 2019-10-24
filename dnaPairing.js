//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//********************Notes***********************************//
//My pseudo code
//Input: string
//Output: nested array
//tools: For loop, conditional statement, variable to store the output, .split(), .push()
//Each time the loop runs I am testing to see what letter it is and depending upon the letter, I am pushing the child array into the parent array

//*******************Class Notes******************************//
////Input: character strand/string, Output: nested array
//create 2 variables, one that stores the transformation of the input string into an array. create  a second variable that stores an empty array/our output.
//create a for loop that runs through the array
//create a conditional statement that checks to see if the current letter we are on in the loop is equal to one of the 4 letters
//If true, push an array with the two strings into our variable storing the array
//return the parent array, variable
//tools: split method, for loop, conditional statement

function pairElement(str) {
  //your code here
  var pairs = [];
  var matchArray = str.split("");
  for (var i = 0; i < matchArray.length; i++) {
    if (matchArray[i] === "G") {
      pairs.push(["G", "C"]);
    } else if (matchArray[i] === "C") {
      pairs.push(["C", "G"]);
    } else if (matchArray[i] === "A") {
      pairs.push(["A", "T"]);
    } else {
      pairs.push(["T", "A"]);
    }
  }

  return pairs;
}

var output1 = pairElement("GCG");
var output2 = pairElement("GCGTA");
//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
