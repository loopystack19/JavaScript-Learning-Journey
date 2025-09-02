-super keyword is used to access the properties and methods of a super class, the same way this keyword is used this objects

**sample programme**

class Animal{

    constructor(name, age){

        this.name=name;

        this.age=age;

    }

    move(speed){

        console.log(`This ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){

        super(name, age);

         this.runSpeed = runSpeed;

    }

    run(){

        console.log(`This ${this.name} can run`);

        super.move(this.runSpeed);

    }
}

class Fish extends Animal{

    constructor(name, age, swimSpeed){

        super(name, age);

        this.swimSpeed = swimSpeed;

    }
    swim(){

        console.log(`This ${this.name} can swim`);

        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{

    constructor(name, age, flySpeed){

        super(name, age);

        this.flySpeed=flySpeed;
    }

    fly(){

        console.log(`This ${this.name} can fly`);

        super.move(this.flySpeed);
    }
}

const rabbit= new Rabbit("buggsBunny", 45, 12);

console.log(rabbit["name"]);

console.log(rabbit["age"]);

rabbit.run();

const fish = new Fish("garry", 3, 23);

console.log(fish["name"]);

console.log(fish["age"]);

fish.swim();

const hawk= new Hawk("baldEagle", 65, 123);

console.log(hawk["name"]);

console.log(hawk["age"]);

hawk.fly();