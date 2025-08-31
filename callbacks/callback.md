**Call backs()**-This are functions passed to other functions as arguements, this ensures a particular execution order 

**Sample programme**

function hello(callback){

    console.log("Hello");

    callback();
}

function wait(){

    console.log("Wait as your request is being processed");
}

hello(wait);