// alert("JavaScript works!");

// Cory Salvatore 11-8-14
// SDI 1411
// Lab 6 Arrays

var arrayFunction = function()
{
	var familyArray = ["John Salvatore", "Gladys Salvatore", "Jason Salvatore", "John Salvatore"];
	var relationArray = ["Father", "Mother", "Eldest Half-Brother", "Middle Half-Brother"];
	
	for(var i = 0; i < familyArray.length; i++)
	{
		console.log(familyArray[i] + " is my " + relationArray[i] + ".\n");
	}
};

arrayFunction();
