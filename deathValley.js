//CODE SCHOOL
/*
We’ve made a significant difference, but there are still too many sheep for the fragile Death Valley ecosystem. The Rangers would like you to implement the following new plan for population reduction:

If the month is a multiple of 4, then find 75% of the sheep population. Log that value to the console in the format below. Then, remove that value from the total number of sheep.
Otherwise, if the population is above 10000, find half of the sheep population. Log that value to the console in the format below. Then, remove that value from the total number of sheep.
Use this format for logging sheep reduction:

"Removing <number> sheep from the population."
*/
var numSheep = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  if(monthNumber % 4 === 0) {
  	var sheepRemoval = numSheep * (3/4);
    console.log("Removing " + sheepRemoval + " sheep from the population.");  
    numSheep -= sheepRemoval;
  } else if (numSheep > 10000) {
    numSheep /= 2;
    console.log("Removing " + numSheep + " sheep from the population.");
  	
  }

  numSheep *= 4;
  console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
}
