//Error objects in js =>An object that is created to represent a problem

//When errors are uncaught the programme exists prematurely

// try{
//   console.log(x);
// }
// catch(error){

//   console.error(error);
// }
// console.log("You have reached the end of the programme");

try{

  const dividend=Number(window.prompt("Enter a dividend Number: "));

  const divisor=Number(window.prompt("Enter a divisor: "));

  if(divisor === 0){
    throw new Error("The divisor cannot be a zero: ");
  }

  const results= dividend / divisor;

  console.log(results);

}
catch(error){

  console.error(error);

}