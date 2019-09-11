//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

// Problem Statement
// Given the radius from the user, we want to find the area and the perimeter of thr circle
// input: radius, a Number
// create a variable to store the calculated area
// create a variable to store the calulated perimeter
// calculate area with PI * radius ^ 2
// calculate perimeter with 2 * PI * radius
// return statement that is the string with the variables
// outputs: area and perimeter, two numbers, bonus: output will be a concatenated String

function circleCalculation(radius) {
	var area = Math.PI * Math.pow(radius, 2);
	var perimeter = 2 * Math.PI * radius;
	return "The area of the circle is " + Math.round(area) + " and the perimeter of the circle is " + Math.round(perimeter) + ".";
}
circleCalculation(10);
// console.log version 
var myCircle = circlecalculations(10);
console.log(myCircle);