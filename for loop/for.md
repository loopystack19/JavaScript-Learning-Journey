**For loop in js**

-unlike while loop which continues to execute while a certain condition remains true, for loop can only execute for a particular number of times

**Syntax**

for(intialization; condition; increment/decrement){

    code block;
}

**Initialization**-This is the starting point of the for loop

**Condition**-When this becomes false, the for loop iteration stops

**increment/Decrement**-the rate of increase or decrease of the loop

**sample programme**

------------------

<!-- **Intermediate
Write a program using a for loop that:
Takes a number n.
Prints the multiplication table of n (up to 10).** -->

let multiplicationTable=function(number){

    for(let i=1; i<=10; i++){

        let product=number * i;

        console.log(product);
    }
}

multiplicationTable(10);

