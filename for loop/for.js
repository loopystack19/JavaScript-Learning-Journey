/*Write a program using a for loop that:
Prints all prime numbers between 1 and 100.*/

let printPrimeNumbers=function(){

    let primeNumbers=[];

    for(let n=2; n<=100; n++){

        for(d=2; d<=n; d++){

            if(n % d === 0){

                primeNumbers.push(n);
            }
        }
    }

    console.log(primeNumbers)
}

printPrimeNumbers();
