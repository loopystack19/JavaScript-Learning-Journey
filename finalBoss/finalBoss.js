/*Do the following in steps, using the right methods:

Filter → keep only even numbers.

Map → square each of those even numbers.

forEach → print each squared number individually.

Reduce → find the sum of all the squared even numbers. */

let numbers = [3, 10, 7, 4, 15, 20, 2, 19];

function isEven(element){

    return element % 2 === 0;
}

function square(element){

    return Math.pow(element, 2);
}

function printSquare(element){

    console.log(element);
}

function sumSquared(accumulator, nextElement){

    return accumulator + nextElement;
}

let evenNumbers=numbers.filter(isEven);

let squared=evenNumbers.map(square);

let sum=squared.reduce(sumSquared);


console.log(evenNumbers);

console.log(squared);

squared.forEach(printSquare);

console.log(sum);
