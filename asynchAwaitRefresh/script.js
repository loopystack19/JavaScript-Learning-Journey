//Async-Makes a function return a promise
//Await makes an async function wait for a promise

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkedDog = true;
            if (walkedDog) {
                resolve("You walked the Dog");
            } else {
                reject("You never walked the Dog");
            }
        }, 3000);
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleanedKitchen = true;
            if (cleanedKitchen) {
                resolve("You cleaned the kitchen");
            } else {
                reject("You never cleaned the kitchen");
            }
        }, 3300);
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const noTrash = false;
            if (noTrash) {
                resolve("You took out the trash");
            } else {
                reject("You never took out the trash");
            }
        })
    })
}
async function doChores() {

    try {
        const walkDogResults = await walkDog();

        console.log(walkDogResults);

        const cleanKitchenResult = await cleanKitchen();

        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();

        console.log(takeOutTrashResult);
    }
    catch(error){
        console.error(error)
    }

}

doChores();