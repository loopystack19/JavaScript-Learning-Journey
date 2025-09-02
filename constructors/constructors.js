function Person(firstName, lastName, age, isEmployed){

    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.isEmployed=isEmployed;
}


let person1=new Person("spongeBob", "squarePants", 25, true);

let person2=new Person("patrick","star",42,false);

let person3=new Person("sandy","cheecks", 27, false);

console.log(person1.firstName);

console.log(person2.lastName);

console.log(person3.isEmployed);