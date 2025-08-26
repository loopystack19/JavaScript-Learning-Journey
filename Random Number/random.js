// Question:
// Write a JavaScript program that simulates rolling two dice.

// Each die should return a random integer between 1 and 6.

// Print the values of both dice.

// Also print their sum.

// If the sum is 7 or 11, print "You win!", otherwise print "Try again.".

var firstDice=Math.floor(Math.random()*6)+1;

var secondDice=Math.floor(Math.random()*6)+1;

var sum=firstDice + secondDice;

if(sum === 7 || sum === 11){

    console.log("You win !");
}else{

    console.log("Try again");
}