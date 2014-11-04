//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

// var p;
// var q;
// var r;
// 
// p = confirm("First value:  Click OK for true or Cancel for false.");
// q = confirm("Second value:  Click OK for true or Cancel for false.");
// r = confirm("Third value: Click OK for true or Cancel for false.");

// if (p || q) {
    // console.log("With " + p + " or " + q + ", the outcome is TRUE.");
// } else {
    // console.log("With " + p + " and " + q + ", the outcome is FALSE.");
// };

// for (var i = 0; i < 8; i++) 
// {
  // if(p && (q || r))
  // {
  	// console.log("With " + p + " or " + q + " and " + r + ", the outcome is TRUE.");
  // }
  // else
  // {
  	// console.log("With " + p + " or " + q + " and " + r + ", the outcome is False.");
  // }
// }
// 
// for (var i = 0; i < 8; i++) 
// {
  // if((p && !q) || r)
  // {
  	// console.log("With " + p + " and " + !q + " or " + r + ", the outcome is TRUE.");
  // }
  // else
  // {
  	// console.log("With " + p + " and " + !q + " or " + r + ", the outcome is False.");
  // }
// }
// 
// for (var i = 0; i < 8; i++) 
// {
  // if(p || (q || r))
  // {
  	// console.log("With " + p + " or " + q + " and " + r + ", the outcome is TRUE.");
  // }
  // else
  // {
  	// console.log("With " + p + " or " + q + " and " + r + ", the outcome is False.");
  // }
// }

var userAge = prompt("How old are you?");

if(userAge > 10 || userAge < 55)
{
	console.log("Your movie ticket price is $12.00");
}
else
{
	console.log("Your movie ticket price is $7.00");
}

var tiresFront = confirm("Do both front tires have equal pressure?");
var tiresRear = confirm("Do both rear tires have equal pressure?");

if(tiresFront && tiresRear)
{
	console.log("Both the front and rear tires are up to standards");
}
else
{
	console.log("Both the front and rear tires are not up to standards");
}
