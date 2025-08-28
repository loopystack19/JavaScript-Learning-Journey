/*Write a program using a while loop that:

Keeps generating random numbers between 1 and 10.

Stops only when the number 7 appears.

Print how many tries it took to get 7.*/

let randomNumber = function () {

    let x;
  do {
     x = Math.floor(Math.random() * 10)+1;

    console.log(x);
  } while (x !== 7);
};

randomNumber();
