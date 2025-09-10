function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkedDog = true;

      if (walkedDog) {
        resolve("You walked the dog 🐕");
      } else {
        reject("you never walked the dog");
      }
    }, 2500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanedKitchen = true;

      if (cleanedKitchen) {
        resolve("The kitchen was cleaned");
      } else {
        reject("You never cleaned the kitchen");
      }
    }, 3000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashOut = false;

      if (trashOut) {
        resolve("There is no trash in the house");
      } else {
        reject("the house kinda smells awaful, you never took out the trash");
      }
    }, 1200);
  });
}

async function doChores() {
  try {
    const walkedDogResults = await walkDog();

    console.log(walkedDogResults);

    const cleanKitchenResults = await cleanKitchen();

    console.log(cleanKitchenResults);

    const takeTrashOut = await takeOutTrash();

    console.log(takeTrashOut);
  } catch (error) {
    console.log(error);
  }
}

doChores();