**While loop**-A while loop enables a js programme to run a certain code block while some condition remains true

**Sample programme**

var loggedIn=false;

var userName;

var password;

while(!loggedIn){
    
    userName=prompt("Whats your user name");
    
    password=prompt("What is your password");
    
    if(userName === "userName" && password === "password"){
        
        loggedIn=true;
        
        console.log(`Hello ${userName} you are logged in`);
    }else{
        
        console.log("Wrong credentials , try again");
    }
}

**Sample programme 2**

/*Write a js programme that takes a number n and prints all even numbers from 0 to n */

let printNumbers=function(number){

    let x=0;

    while(x<number){

        if( x % 2 === 0 ){

            console.log(x);
        }

        x++;
    }
}

printNumbers(10);