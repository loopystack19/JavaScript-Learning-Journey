An error is an object that is created when a problem occurs, when the error is not caught the programme exists prematurely

but there is away we can deal with that and handle code that may potentially cause an error

**sample programme**

try {
  let dividend = Number(window.prompt("Enter a dividend"));

  let divisor = Number(window.prompt("Enter a divisor"));

  if (divisor === 0) {
    throw new Error("The divisor can be zero, provide another value");
  }

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("both the dividend and divisor need to be of number value");
  }
} catch (error) {
    
  console.error(error);

} finally {
  console.log("this always executes");
}
