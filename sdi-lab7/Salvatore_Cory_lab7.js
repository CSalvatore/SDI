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

var jsonFunction = function()
{
	for(var element in jsonData.videogames)
	{
		if(element == 0)
		{
			object1 = new gamesConstructor(jsonData.videogames[element].title, jsonData.videogames[element].hero, jsonData.videogames[element].villain, jsonData.videogames[element].released);
		}
		else if(element == 1)
		{
			object2 = new gamesConstructor(jsonData.videogames[element].title, jsonData.videogames[element].hero, jsonData.videogames[element].villain, jsonData.videogames[element].released);
		}
		else if(element == 2)
		{
			object3 = new gamesConstructor(jsonData.videogames[element].title, jsonData.videogames[element].hero, jsonData.videogames[element].villain, jsonData.videogames[element].released);
		}
	}
	
};

jsonFunction();

console.log(object1.hero + " is the hero in the videogame " + object1.title + ". The villain is " + object1.villain + ". The game was released " + object1.released + ".");
console.log(object2.hero + " is the hero in the videogame " + object2.title + ". The villain is " + object2.villain + ". The game was released " + object2.released + ".");
console.log(object3.hero + " is the hero in the videogame " + object3.title + ". The villain is " + object3.villain + ". The game was released " + object3.released + ".");