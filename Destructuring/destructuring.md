-destructuring is used to extract values from arrays and objects and assign them to variables in a convinient way 

**Sample programme 1**-swapping the value of variables dynamically

let a=1;

let b=2;

[a,b]=[b, a];

console.log(`The value of a is ${a}`);

output-2

console.log(`The value of b is ${b}`);

output-1

**Sample programme 2**-assigning variables dynamically



let colors=["red","blue","green","white"];

const[firstColor, secondColor, thirdColor]=colors;

console.log(firstColor);

console.log(secondColor);

console.log(thirdColor);

**sample programme three**-swapping the order of the elements of an array

let colors=["red","blue","green","white"];

[colors[0], colors[3]]=[colors[3], colors[0]];

console.log(colors);

**Output**

[ 'white', 'blue', 'green', 'red' ]


**sample programme**-Destructuring an object

let person={
    firstName:"spongeBob",
    lastName:"squarePants",
    age:25,
    job:"Fry cook"
}

const{firstName, lastName, age, job="unemployed"}=person;

console.log(firstName);

console.log(lastName);

console.log(age);

console.log(job);

**Function that destructures an object**


function displayPerson({firstName, lastName, age, job="unemployed"}){

    console.log(`name:${firstName} ${lastName}`);

    console.log(`age:${age}`);

    console.log(`job:${job}`);
}

const person={

    firstName:"spongeBob",
    lastName:"squarePants",
    age:25,
    job:"fry cook"
}

displayPerson(person);




