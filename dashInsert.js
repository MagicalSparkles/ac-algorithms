/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/
//Input: a number
//Output: a string, with dashes between the odd numbers

//create a variable for the string
//create a variable to store the transformation of the number first to a string and then to an array, tools: .toString().split("")
4982
["4", "9", "8", "2"]
//create a loop to go through each of the numbers in the array
	//Need a conditional statement that will test if the number is odd && if the number after it is odd
		//If true, I want to add the number and the dasd to the string
		//If false, I want to just add the number

function dashInsert(num) {
	// Your code
	var outputString = "";
	var array = num.tostring().split("");
	//console.log(array) a number has become a string and the split breaks the string apart to make it an array
	for (var = 0; i < array.length; i++){
		if(array[i] % 2 === 1 && array[i + 1] % 2 ===1){
			outputString = outputString + array[i] + "-";
		}else{
			outputString = outputString + array[i];
		}
		//array[i] as you loop through the array everytime the value of i will change giving us the different items inside of the array, giving us every element in our array.
	}
	return outputString;
}
dashInsert(34567);