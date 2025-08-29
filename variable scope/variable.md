**Variable scope**-Basically this is used to determine areas in your programme where a variable is recognized, there is local scope and global scope

**Sample programme**

let x=1;

function function1(){

    let y=1;

    console.log(y);

    console.log(x);
}

function function2() {
  let z = 2;

  console.log(z);

  console.log(x);
}

function1();

function2();


**NB**-Think of things like this, a global variable can be recognized everywhere in the programme but local variables are only recognized inside their functions only