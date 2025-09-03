
function displayPerson({firstName, lastName, age, job="unemployed"}){

    console.log(`name:${firstName} ${lastName}`);

    console.log(`age:${age}`);

    console.log(`job:${job}`);
}

const person={

    firstName:"spongeBob",
    lastName:"squarePants",
    age:25,
    job:"fry cook"
}

displayPerson(person);