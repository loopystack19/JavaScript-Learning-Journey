class Animal{

    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    eat(){
        console.log(`This ${this.name} is eating`);
    }
}

class Fish extends Animal{

    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed=swimSpeed;
    }

    displaySpeed(){
        console.log(`This ${this.name} has a swim speed of ${this.swimSpeed} km/h`);
    }
}

const animal=new Animal("Gary",3);

const fish1=new Fish("Tilapia",3,12);

animal.eat();

fish1.eat();

fish1.displaySpeed();