class BankAccount{

    constructor(balance){

        this._balance = balance > 0 ? balance : 0;
    }

    set balance(newBalance){

        if(newBalance > 0){

            this._balance = newBalance;
        }else{

            console.log("The balance value needs to be greater than 0");
        }
    }

    get balance(){

        return this._balance;
    }
}

const bankAccount001= new BankAccount(-100);

console.log(bankAccount001.balance);