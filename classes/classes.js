
class Product{

    constructor(name, price){

        this.name=name;

        this.price=price;
    }
    displayProduct(){

        console.log(`product: ${this.name}`);

        console.log(`price:$${this.price.toFixed(2)}`);
    }

    calculateSalesTax(salesTax){

       return (this.price + this.price * salesTax).toFixed(2);

    }
}

const product1= new Product("shirt",10.87)

product1.displayProduct();

const total=product1.calculateSalesTax(0.05);

console.log(`your total is $${total}`);