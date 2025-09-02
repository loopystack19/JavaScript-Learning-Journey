**This key word is used to reference the object that is currently executing the function**

let person1={
    
    firstName:"patrick",
    lastName:"star",
    age:25
}

let windowPrompt=prompt("choose a key to see the value, (firstName), lastName, age ");

console.log(person1[windowPrompt])

-In this example instead of using person1.firstName we used this.firstName to refrence the object's firstName

