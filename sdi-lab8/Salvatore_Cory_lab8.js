// alert("JavaScript works!");

// Cory Salvatore 11-13-14
// SDI 1411
// Lab 8 Strings

// var emailCheck = function()
// {
	// var userEmail 	  = prompt("Enter your email address.");
	// var hasAtSign	  = false;
	// var hasPeriod  	  = false;
	// var hasSpace      = false;
	// var atCounter 	  = 0;
	// var periodCounter = 0;
	// var atIndex;
	// var periodIndex;
// 	
	// for (var i=0; i < userEmail.length; i++) 
	// {
		// if(atCounter <= 1)
		// {
	    	// if(userEmail[i] == "@")
	 		// {
	  			// hasAtSign = true;
	  			// atCounter++;
	  			// atIndex = userEmail[i].indexOf();
	 	 	// }
	 	// }
	 	// else
	 	// {
	 		// hasAtSign = false;
	 	// }
	 	// if(periodCounter <= 1)
	    	// if(userEmail[i] = ".")
	 		// {
	  			// hasPeriod = true;
	  			// periodCounter++;
	  			// periodIndex = userEmail[i].indexOf();
	  		// }
	  	// else
	 	// {
	 		// hasPeriod = false;
	 	// }
	 	// if(userEmail[i] == " ")
	 	// {
	 		// hasSpace = true;
	 	// }
	// };
	// if(hasAtSign && hasPeriod && atIndex < periodIndex && !hasSpace)
	  // {
	  	// console.log("The email you have entered is " + userEmail + ".");
	  // }
	  // else
	  // {
	  	// console.log(userEmail + " is not a valid email address.");
	  // }
// };
// 
// emailCheck();

var threeStrings = function(stringList, firstSep, secondSep)
{
	var listArray = stringList.split(firstSep);
	var listString = "";
	
	console.log("The " + firstSep + "'s in the list will be replaced with " + secondSep + "'s.");
	console.log(stringList);
	
	for (var i=0; i < listArray.length; i++)
	{
		var listWord = listArray[i].charAt(0);
		
		listList = listWord + listArray[i].substr(1);
		
		listString = listString + listList + secondSep;
	}
	console.log(listString);
};

threeStrings("Apple,Orange,Banana,Grapes", ",", "/");
