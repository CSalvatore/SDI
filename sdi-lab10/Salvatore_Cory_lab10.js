// alert("JavaScript works!");

// Cory Salvatore 11-13-14
// SDI 1411
// Lab 10 Problem-Solving

// Problem 1

// var multiplesSum;
// 
// var numberMultiples = function()
// {
	// var sumOfMultiples = 0;
// 	
	// for(var i = 1; i < 1000; i++)
	// {
		// if(i % 3 == 0 || i % 5 == 0)
		// {
			// sumOfMultiples = sumOfMultiples + i;
		// }
	// }
	// return sumOfMultiples;
// };
// 
// multiplesSum = numberMultiples();
// 
// console.log(multiplesSum);

// Problem 2

var powerballArray;

var powerballNumbers = function()
{
	var lotteryArray = [];
	
	for(var i = 0; i < 6; i++)
	{
		if(i < 5)
		{
			lottoNum = Math.random() * (59 - 1) + 1;
			lottoNum = lottoNum.toFixed(0);
		
				if(lotteryArray.indexOf(lottoNum, 0) != -1)
				{
					continue;
				}
				else
				{
					lotteryArray.push(lottoNum)[i];
				}
		}
		else
		{
			powerBall = Math.random() * (35 - 1) + 1;
			powerBall = powerBall.toFixed(0);
			
			lotteryArray.push(powerBall)[5];
		}
	}
	return lotteryArray;
};

powerballArray = powerballNumbers();

console.log(powerballArray);
