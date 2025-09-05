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
