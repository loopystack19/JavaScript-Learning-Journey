//Objects->A collection of related properties or methods that can represent a real world object

//object={key:"value"}

let person1={
    firstName:"SpongeBob",
    lastName:"squarePants",
    age:27,
    isEmployed:true,
    sayHello:()=>{
        console.log("My name is SpongeBob");
        console.log("This is my say hello method");
    }
}

let person2={
    "firstName":"Patrick",
    "lastName":"Star",
    "age":35,
    "isEmployed":false,
    "sayHello":()=>{
        console.log("Hello am patrick");
        console.log("This is my hello method")
    }
}

console.log(person1.firstName);

console.log(person2["firstName"]);

person2.sayHello();

//Based on these we understand that you can access the properties of different objects based on how they are declared

//The differences of using the brackets and the dot notation comes down to functionality, the bracket notation is way more dynamic

