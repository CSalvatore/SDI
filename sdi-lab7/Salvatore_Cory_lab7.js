// alert("JavaScript works!");

// Cory Salvatore 11-11-14
// SDI 1411
// Lab 7 Objects

var gamesConstructor = function(gameTitle, gameHero, gameVillain, gameReleased)
{
	this.title = gameTitle;
	this.hero = gameHero;
	this.villain = gameVillain;
	this.released = gameReleased;
};

var constructor = function()
{
	newObject = new gamesConstructor(jsonData.videogames[0].title, jsonData.videogames[0].hero, jsonData.videogames[0].villain, jsonData.videogames[0].released);
};

var jsonFunction = function()
{
	for(var element in jsonData.cars)
	{
	for(var nextKey in jsonData.cars[element])
	{
		console.log("The next key is is " + nextKey);
		console.log(jsonData[element[nextKey]]);
	}
	}
};

constructor();
jsonFunction();

console.log(jsonData);