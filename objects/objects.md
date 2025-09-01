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