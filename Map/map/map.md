**Map()**-iterates through the elements of an array and applies a specified function, its returns a new array

**syntax** Array.map(callback);


**Sample intermediate programme**

<!-- Write a function that takes an array of numbers and returns a new array with each number squared. Use map. -->

let numbers=[1,2,3,4,5];

function square(element){

    return Math.pow(element, 2);
}

let squares=numbers.map(square);

console.log(squares);

**Expert question**

<!-- write a function that returns an array of lengths of a specified string array -->


const strings=["apple", "banana", "kiwi"];


function stringLength(element){

    return element.length;
}


let lengthArray=strings.map(stringLength);

console.log(lengthArray);

