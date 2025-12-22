//Classes-These are blueprints for creating objects

class product{

    constructor(name, price){

        this.name=name;
        this.price=price;
    }

    displayProduct(){

        console.log(`Product ${this.name}`);

        console.log(`Price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){

        return this.price +(this.price * salesTax)
    }
}

let product1= new product("shirt",10.99);

let product2=new product("Pens",3.20);

let product3=new product("underWear",100);

const salesTax=0.05;

let total=product1.calculateTotal(salesTax);

console.log(total);