Promises

-A promise is a javascript object that manages asynchronous code 

-promises are a better way to escape callback hell

**sample-programme**


function walkDog(callback){

    setTimeout(()=>{
        console.log("The dog has already been walked");
        callback();
    },2000);
}

function cleanKitchen(callback){

    setTimeout(()=>{
        console.log("The kitchen is clean");
        callback();
    },3500);
}

function takeOutTrash(callback){

    setTimeout(()=>{

        console.log("The trash has been taken out");
        callback();
    },500);
}

walkDog(()=>{
    cleanKitchen(()=>{
        takeOutTrash(()=>{
            console.log("All the chores are done, i guess we can play career mode on fifa");
        })
    })
});

**sample programme**

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("We just walked the dog 🐕");
    }, 3000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("We just cleaned the kitchen 🧹");
    }, 3500);
  });
}

function cookDinner() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Babe, i just finished cooking pasta");
    }, 4200);
  });
}

//after writing the code for the functions we are going to method chain

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return cookDinner();
  })
  .then((value) => {
    console.log(value);
  });
//sometimes a promise may not resolve, so what next??

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
