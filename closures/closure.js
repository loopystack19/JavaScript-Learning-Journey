function outter(){

    const msg="Hello am outter function";

    function inner(){

        console.log(msg);
    }

    return inner;
}

const execution= outter();

execution();