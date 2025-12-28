// promise=> An object that manages asynchro ous operations
//           wrap a promise object around{asynchronous code}
//           "i promise to return a value"
//           pending -> Resolved or rejected
//           new Promise((resolve, reject)=>{asynchronous code})



function walkDog(){
    return new Promise((resolve, reject)=>{
        try{
            setTimeout(()=>{
                const dogWalked=true;
                if(dogWalked){
                    resolve("You walked the Dog 🐕‍🦺 ✅");
                }else{
                    reject("You never walked the dog my nigga, stop the CAP! ❌");
                }
            })
        }
        catch(error){
            console.log(error);
        }
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject)=>{
        try{

            setTimeout(()=>{

                const kitchenCleaned=false;

                if(kitchenCleaned){
                    resolve("You cleaned the kitchen ✅");
                }else{
                    reject("You never cleaned the kitchen ❌");
                }
            },4200)

        }
        catch(error){
            console.log(error);
        }
    })
}

function cookDinner(){
    return new Promise((resolve, reject=>{

        try{

            setTimeout(()=>{
                const pastaAvailable=true;
    
                if(pastaAvailable){
                    resolve("You cook dinner ✅")
                }else{
                    reject("You never cooked dinner ❌");
                }
            });

        }
        catch(error){
            console.log(error);
        }
    }))
}

walkDog().then(value=>{
    console.log(value);
    return cleanKitchen();
}).then(value=>{
    console.log(value);
    return cookDinner();
}).then(value=>{
    console.log(value);
    setTimeout(()=>{
        console.log("ALL THE TASKS ARE COMPLETED ✅")
    },1220);
}).catch(error=>{
    console.error(error);
})