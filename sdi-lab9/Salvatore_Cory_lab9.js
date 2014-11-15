// alert("JavaScript works!");

// Cory Salvatore 11-13-14
// SDI 1411
// Lab 9 Numbers and Dates

// Problem 1

var newNumDec;

var numberFormat = function()
{
	var numDec	  = 9.23415164535734635473453;
	var format = 7;
	
	console.log("The number, " + numDec + ", will be shortened to " + numFormat + " spaces after the decimal point.");
	
	numDec = numDec.toFixed(format);
	
	return numDec;
};

newNumDec = numFormat();

console.log(newNumDec + " is the new number.");

// Problem 2

var numString;

var stringNums = function()
{
	var number = "534";
	
	var validString = isNaN(number);
	
	if(!validString)
	{
		return number;
	}
	else
	{
		console.log("Thats not a valid number.");
	}
};

numString = stringNums();

console.log("The number entered is " + numString + ".");

// Problem 3

var differenceDates;
var hrsOrDays = confirm("Would you like the difference in dates to be in hours or days? (Ok = hours, Cancel = days)");

var differences = function()
{
	var firstDate = new Date("12/23/2014");
	var secondDate = new Date("11/15/2014");
	
	console.log("The first date is " + firstDate + ", and the second date is " + secondDate + ".");
	
	var dateDiff = firstDate - secondDate;
	
	if(hrsOrDays)
	{
		dateDiff = dateDiff/1000/60/60;
		return dateDiff;
	}
	else
	{
		dateDiff = dateDiff/1000/60/60/24;
		return dateDiff;
	}
};

differenceDates = differences();

if(hrsOrDays)
{
	console.log("The difference between the two dates is " + differenceDates + " hours.");
}
else
{
	console.log("The difference between the two dates is " + differenceDates + " days.");
}
