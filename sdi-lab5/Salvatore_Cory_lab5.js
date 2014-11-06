// alert("JavaScript works!");

// Cory Salvatore 11-6-14
// SDI 1411
// Lab 5

// variables
var userNum1 = parseFloat(prompt("Enter a number."));
var userNum2 = parseFloat(prompt("Enter another number."));
var userOperator = prompt("Enter the opertator you want to use: (*, /, +, -)");

// functions
var mathMult = function(x, y)
{
	console.log("Multiplying...");
	return (x * y);
};

var mathDiv = function(x, y)
{
	console.log("Dividing...");
	return (x / y);
};

var mathAdd = function(x, y)
{
	console.log("Adding...");
	return (x + y);
};

var mathSub = function(x, y)
{
	console.log("Subtracting...");
	return (x - y);
};

if(userOperator == "*")
{
	var userAnswer = mathMult(userNum1, userNum2);
}
else if(userOperator == "/")
{
	var userAnswer = mathDiv(userNum1, userNum2);
}
else if(userOperator == "+")
{
	var userAnswer = mathAdd(userNum1, userNum2);
}
else if(userOperator == "-")
{
	var userAnswer = mathSub(userNum1, userNum2);
}
if(userAnswer == "NaN" || userAnswer == "undefined" || userAnswer == "Infinity")
{
	console.log("The answer is undefined or imaginary.");
}
else
{
	console.log("The answer is " + userAnswer + ".");
}
