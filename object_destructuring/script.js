//Destructuring-A way to extract values from array and objects
//              then assign them to variables in a convinient way
//             []->Performs array destructuring
//             {}->Performs object destructuring

//Swap the values of two variables
let a=1;
let b=2;
[a,b]=[b,a];
console.log(a);
console.log(b);

//Swap two elements in an array

const colors=["red","green","blue","white","black"];
[colors[0],colors[4]]=[colors[4],colors[0]];
console.log(colors);

const [firstColor, secondColor, thirdColor,...extraColors]=colors;

console.log(firstColor);

console.log(secondColor);

console.log(thirdColor);

console.log(extraColors);

//Object destructuring

let person1={
    firstName:"Spongebob",
    lastName:"SquarePants",
    age:30,
    job:"Fry cook"
}

//Using a function to perform object destructuring

function displayPerson({firstName, lastName,age,job="unemployed"}){
    console.log(firstName);
    console.log(lastName);
    console.log(age);
    console.log(job);
}

displayPerson(person1);

