/* Write a javascript program that takes two numbers and checks whether any of the two numbers is 100 or the sum of the two numbers is 100, if so the programme returns true */

var randomNumbers = [100, 65, 89, 33, 12];

var i = Math.floor(Math.random() * randomNumbers.length);

var j;

do {
  j = Math.floor(Math.random() * randomNumbers.length);
} while (j === 1);

var firstNumber = randomNumbers[i];

var secondNumber = randomNumbers[j];

var sum = firstNumber + secondNumber;

if (firstNumber === 100 || secondNumber === 100 || sum === 100) {
  console.log("True");
} else {
  console.log("False");
}
