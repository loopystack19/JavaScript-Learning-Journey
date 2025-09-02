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