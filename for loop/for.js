function printAllPrime() {
  const primeNumbers = [];

  for (let n = 2; n <= 100; n++) {
    let isPrime = true;
    for (let d = 2; d < n; d++) {
      if (n % d === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers.push(n);
    }
  }

  console.log(primeNumbers);
}

printAllPrime();
