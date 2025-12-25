//Nested Objects in js
// const person={
//     fullName:"Spongebob Squarepants",
//     age:30,
//     isStudent:true,
//     hobbies:["Karate","jelly fishing","cooking"],
//     address:{
//         street:"124 conch str",
//         city:"Bikini Bottom",
//         country:"International waters"
//     }
// }

class Address{

    constructor(street, city, country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}

class Person{

    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address= new Address(...address);
    }
}

let person1=new Person("spongebob",30,"124 conch streer",
                                      "Bikini Bottom",
                                      "Int waters"
);

console.log(person1.name);
console.log(person1.age);

for(const property in person1.address){

    console.log(person1.address[property]);
}

