-Objects are representation of real world entities , they can have a collection of properties and methods

**Syntax**

object={
    key:value,
    key2:value,
    key3:value
}

**Sample programme**

let person1={
    firstName:"spongeBob",
    lastName:"squarePants",
    age:30,
    isEmployed:true,
    sayHello:function(){console.log("Hello, am spongeBob")}
}

//Accessing the properties of person1

console.log(person1.firstName);

console.log(person1.lastName);

console.log(person1.age);

console.log(person1.isEmployed);

person1.sayHello();

//Accessing the properties of an object using the bracket notation

1.Dynamic access

let book={
    title:"1984",
    author:"George orwell",
    pages:328
}

let key="author";

console.log(book["author"]);

2.Properties with space

let laptop = { "brand name": "Dell", price: 600 };

console.log(laptop["brand name"]);

3.Loop through keys

let person1={

    firstName:"patrick",
    lastName:"star",
    age:25,
    isEmployed:false,
    sayHello:function(){

        console.log("Hello am patrick");
    }
}

for(let key in person1){

    console.log(person1[key]);
}

4.Dynamic key selection 

let person1={
    
    firstName:"patrick",
    lastName:"star",
    age:25
}

let windowPrompt=prompt("choose a key to see the value, (firstName), lastName, age ");

console.log(person1[windowPrompt])

5.Nested Objects

