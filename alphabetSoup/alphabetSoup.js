/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/
//Input: a string
//Output: a string, but with letters in alpabetical order
//.split("")(where you want to make the split/delimiter. no space between ("") means every character is an element, space (" ")means you want each word to be an element): splits string into an array
//.sort takes in every element in an array and puts it into alphabetical order
//.join() takes in an argument. Empty quotes no space, a space is one space, dash would put a dash between ect..brings elements together as one string
//step 1: create a variable to store our output
//step 2: split the string into an array so that each character is its own element
//step 3: sort the array
//step 4: join the array so that it turns back into a string
//step 5: trim the string so that it removes all blank spaces
//step 6: return the value of my string output 

function alphabetSoup(str) {
	//Your code here
	var output = str.split("").sort().join("").trim();
	return output 
	
}