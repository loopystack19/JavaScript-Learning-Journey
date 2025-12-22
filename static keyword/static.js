//Create a Vehicle class that tracks the total number of vehicles created using a static property, then design a constructor that initializes make, model, and year for each instance;
//  add a method called displayInfo using a regular function (to properly use this) that logs the vehicle's details, and finally,
//  write a separate piece of code to instantiate three different vehicles and log the static count to the console to prove that the class is successfully tracking all objects created from its blueprint.

class Vehicle{

    static vehicleCount=0;

    constructor(make, model, year){

        this.make=make;

        this.model=model;

        this.year=year;

        Vehicle.vehicleCount++;
    }
    displayInfo(){

        console.log(`Car Make: ${this.make}`);

        console.log(`Car Model: ${this.model}`);

        console.log(`Year: ${this.year}`);
    }

    static displayCount(){

        console.log(`We have created ${Vehicle.vehicleCount} vehicles`);
    }
}

const vehicle1= new Vehicle("Tesla","Model3",2023);

const vehicle2= new Vehicle("Ford","Mustang",1969);

const vehicle3= new Vehicle("Toyota","Camry",2024);

vehicle1.displayInfo();

vehicle2.displayInfo();

vehicle3.displayInfo();

Vehicle.displayCount();