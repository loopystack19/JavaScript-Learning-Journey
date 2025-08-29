**Functions in js**

-Functions are a reuseable block of code, basically think of it like this, you want to sing happy birthday to your friends , instead of writting a new programme for each happy birthday song, you write one that can be called to sing for each person

**Syntax**

function function-name(parameters){
    block of code;
}

**Sample programme**

function happyBirthday(name, age) {
  console.log(`Happy birthday to you`);
  console.log(`Happy birthday to you`);
  console.log(`Happy birthday dear ${name}`);
  console.log(`You are now ${age} years old`);
}

happyBirthday("Jafar",21);

**Parameters and Arguements in functions**

-Parameters are temporary variables that store some values in a function while Arguements are the actual value of the parameter 

-In the example above the parameter was name and the actual value is jafar 

**Return key word in js**

-Some times we need a function to process data and give an output , this is where the keyword return comes into play 

**sample programme**

function sum(num1, num2){

    return num1 + num2;
}

console.log(sum(10,11));-This function returns 21 as the output 

function isValidEmail(email){

    if(email.includes("@gmail.com")){

        return true
    }else{
        return false
    }
}

console.log(isValidEmail("jafarhussein251@gmai.com"));