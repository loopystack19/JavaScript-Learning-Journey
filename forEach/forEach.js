//write a function that only prints prime numbers from an array of numbers 

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