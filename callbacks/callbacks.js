function hello(callback){

    console.log("Hello");

    callback();
}

function wait(){

    console.log("Wait as your request is being processed");
}

hello(wait);