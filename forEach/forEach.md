**ForEach() Method**-This method iterates through the elements of an array and applies a specified function to each element

**Syntax**

Array.forEach(callback);

**Intemediate sample programme**

<!-- Write a function that takes an array of numbers and prints:

Each number

Whether it’s even or odd -->

let numbers=[1,2,3,4,5];

function evaluateNumber(element, index, array){

    if(element % 2 === 0){

        console.log(`${element}: even`)
    }else{
        console.log(`${element}:odd`);
    }
}

numbers.forEach(evaluateNumber);

**Hard sample programme**

//write a function that only prints prime numbers from an array of numbers//

let numbers = [2, 3, 4, 5, 6, 7, 8, 9];

function printPrime(element){

    if(element > 1){

        let isPrime=true;

        for(let i=2; i<element; i++){

            if(element % i === 0){

                isPrime=false;
                
                break;
            }
        }

        if(isPrime){

            console.log(element);
        }
    }
}
numbers.forEach(printPrime);