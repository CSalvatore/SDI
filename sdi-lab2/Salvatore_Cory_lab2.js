alert("JavaScript works!");

// (Task 1)
	var videogameString = "Call of Duty: Advanced Warfare";
	var videogameStringEscapes = "\"COD\"";
	var numDays = 3;
	var midnightBool = true;
	
// (Task 2)
	console.log("I can't wait for " + videogameString + " to release!");
	console.log("I think the new " + videogameStringEscapes + " looks really good.");
	console.log("The game comes out in " + numDays + " days.");
	console.log("It is " + midnightBool + " that I am going to the midnight release.");
	
// (Task 3)
	midnightBool = confirm("Are you going to the midnight release?");
	numDays = prompt("Enter how many days till release day", "3");
	numDays = parseInt(numDays);
	
	console.log("\n" + videogameString + " will be released in " + numDays + ".");
	console.log("It is " + midnightBool + " that I will be going to the midnight release.");