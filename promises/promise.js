function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walked the dog 🐕");
      } else {
        reject("You never walked the dog 😡");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanKitchen = false;

      if (cleanKitchen) {
        resolve("You cleaned the kitchen");
      } else {
        reject("You never cleaned the kitchen ? 😤");
      }
    }, 2500);
  });
}

function cookDinner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foodAvailable = true;

      if (foodAvailable) {
        resolve("Thank you babe for cooking was kinda hungry");
      } else {
        reject("Can we cook something or go for take out, am kinda hungry");
      }
    }, 3000);
  });
}

walkDog()
  .catch((error) => {
    console.log("There was an error and the promise did not resolve");
  })
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .catch((error) => {
    console.log("There was an error and the promise did not resolve");
  })
  .then((value) => {
    console.log(value);
    return cookDinner();
  }).then((value) => {
    console.log(value);
  });
