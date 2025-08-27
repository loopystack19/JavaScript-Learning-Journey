/*The task

Take two numbers and an operator (+, -, *, /).

Use a switch statement to decide which operation to perform.

Print the result.

If dividing by zero, print "Cannot divide by zero".

If operator is invalid, print "Invalid operator".*/

var operands=[0,1,2,3,4,5];

var operators=["+","-","/","%","*"];

var firstNumber=operands[Math.floor(Math.random()*operands.length)];

var secondNumber=operands[Math.floor(Math.random()*operands.length)];

var randomOperator = operators[Math.floor(Math.random() * operators.length)];

var results;

switch(randomOperator){
    case "+":
        results=firstNumber + secondNumber;
        break;
    case "-":
        results=firstNumber- secondNumber;
        break;
    case "*":
        results=firstNumber * secondNumber;
        break;
    case "/":
        if(secondNumber === 0){
            results=`Cannot perform a division when zero is involved`;
        }else{
            results=firstNumber / secondNumber;
        }
        break;
    case "%":
        if(secondNumber === 0){
            results=`Cannot perform a division when zero is involved`;
        }else{
            results=firstNumber % secondNumber;
        }
        break;
}

console.log(results);
