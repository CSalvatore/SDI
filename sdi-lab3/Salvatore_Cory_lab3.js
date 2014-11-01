//alert("JavaScript works!");

// Cory Salvatore 11-1-14
// SDI 1411
// Lab 3 Following a Flowchart

// variables
	var usernameString;
	var userNickName;
	var userfriend1String;
	var userfriend2String;
	var numAnswers = 0;
	var nicknameBool = false;
	var dohomeworkBool = true;
	var choiceString = " ";
	
// variable assignment
	usernameString    = prompt("Enter your name");
	userfriend1String = prompt("Enter your first friend's name");
	userfriend2String = prompt("Enter your second friend's name");
	nicknameBool      = confirm("Do you have a nickname");
	if(nicknameBool == true)
	{
		userNickName = prompt("What is your nickname");
		userNickName = ("\"" + userNickName + "\"");
	}

// variable outputs
	console.log("Your name is " + usernameString + ".");
	console.log("The names of your friends are " + userfriend1String + " and " + userfriend2String + ".");
	if(nicknameBool == true)
	{
		console.log("Your nickname is " + userNickName  + ".");
	}
	console.log("The number of answers completed is " + numAnswers + ".");
	console.log("It is " + dohomeworkBool + " that you want to do the homework\n");

// flow
	choiceString = prompt("Which friend do you want to hangout with after school?");
	if(choiceString == userfriend1String)
	{
		numAnswers = parseInt(prompt("How many questions did you answer?", "0"));
		if(numAnswers > 15)
		{
			console.log("Wow you've done more than me!");
		}
		else if(numAnswers == 15)
		{
			console.log("Looks like we've done the same amount.");
		}
		else
		{
			console.log("I have more done, but I'm not very good at this stuff.");
		}
	}
	else
	{
		dohomeworkBool = confirm("Are you going to work on the homework?");
		if(dohomeworkBool)
		{
			console.log("Everyone who did their homework gets a \"No Homework Pass\"!");
		}
		else
		{
			console.log("Why would you blow off such an easy assignment? It should have taken you only a few minutes.");
		}
	}
