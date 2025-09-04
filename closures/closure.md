-Closures a scenario where a function is defined inside another function, the inner function has access to the scope of the outter function, this allows to keep variables private hence state maintainance

**sample programme**

function outter(){

    const msg="Hello am outter function";

    function inner(){

        console.log(msg);
    }

    return inner;
}

const execution= outter();

execution();