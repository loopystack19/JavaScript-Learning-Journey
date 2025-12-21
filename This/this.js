//This keyword is a reference to the object where the object is used

//person.name=this.name, this depends on the immediate context

//In basic leyman language, this is used inside the object specifically the methods to access the properties

person1={
    "firstName":"SpongeBob",
    "favFood":"Burger",
    "sayHello":function(){
        console.log(`Hello my name is ${this["firstName"]}`);
    }

}

person1.sayHello();

