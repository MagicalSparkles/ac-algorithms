/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/
//My psuedo
//input: a string
//output: a string
//tools: for loop to go through each letter, turn string into array .split(""), .toLowercase use a conditional statement to test if it is lowercase, something to store the output

//Laura psuedo
//create a variable to store the output of the 

//create a loop: the purpose is to run through the array and look at each letter
	//each time the loop runs, 1) add one to i, 2) run a conditional statement that looks at whether or not the letter I am on is lowercase
		//if true, add that letter to our output string once we have transformed it to uppercase
		//if false, add that letter to our output string once we have transformed it to lowercase
		//return the output to get the value of the full string



function swapCase(str) {
	// Your code
	var output = "";
	var array = str.split("");
	
	//ES6 notation of .map helpful for react.js
	// array.map(letter, i) => {
	// 	letter[i] === letter[i].toUpperCase()?
	// 		output += letter[i].toLowerCase()
	// 	 : 
	// 		output += letter[i].toUpperCase()
	// }
	//? true ; false, .map a simlifeies of writing for loops for arrays. It goes through each item and does the associated code block function. ? is a ternary statement where you have a condition nd then a question mark follow by what you want then a colon of what you want. += (output = output + array[i]; is the same as output += array[i];)
	// condition ? output : output
	for(var i = 0; i <array.length; i++){
		if(array[i] === array[i].toLowerCase()){
			output = output + array[i].toUpperCase();
		}else {
			output = output + array[i].toLowerCase();
		}
	
	}
	return output;
}
 var result = swapCase("Oh, Hello!!");
 console.log(result) // "oH, hELLO!!"
 