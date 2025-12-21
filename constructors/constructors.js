//constructor-> A special method used to define the methods and properties of objects

function Person(firstName, lastName, age, isEmployed,hobbies){
    this.firstName=firstName,
    this.lastName=lastName,
    this.age=age,
    this.isEmployed=isEmployed,
    this.hobbies=hobbies
}

let person1= new Person("SpongeBob","SquarePnats",27,["jelly","Bubble blowing","Karate"]);

let person2=new Person("Patrick","Star",32,["jelly Fishing"]);

console.log(person1);

console.log(person2);