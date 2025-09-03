**sample programme**



let person={

    firstName:"SpongeBob",
    lastName:"SquarePants",
    age:25,
    hobbies:["cooking","jelly fishing"],
    address:{

        country:"Kenya",
        city:"Mombasa",
        street:"Nyali beach"
    }
}


for(let key in person){

    console.log(person[key]);
}

for(const key in person.address){

    console.log(person.address[key]);
}

**sample programme 2**

class Address{

    constructor(street, city, country){

        this.street=street;

        this.city=city;

        this.country=country;


    }
}

class Person{

    constructor(name, age, ...address){

        this.name=name;

        this.age=age;

        this.address= new Address(...address);
    }
}

const person1= new Person("spongeBob",25,"124 conch strt","bikiniBottom", "international waters");


for(const key in person1){

    console.log(person1[key]);
}