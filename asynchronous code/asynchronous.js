//call back implementation

function func1(callback){

    setTimeout(()=>{

        console.log("task 1 complete");

        callback()
    },3000)
}

function func2(){

    console.log("task 2 complete");

    console.log("task 3 complete");

    console.log("task 4 complete");
}

func1(func2);