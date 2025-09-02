class Users{

    static userCount =0;

    constructor(userName){

        this.userName=userName;

        Users.userCount++;
    }

    static getUserCount(){

        console.log(`There are ${Users.userCount} online`);
    }

    sayHello(){

        console.log(`hello my user name is ${this.userName}`);
    }
}

let user1=new Users("spongeBob001");
let user2 = new Users("patrick002");
let user3 = new Users("squidward003");
let user4 = new Users("sandy004");

user1.sayHello();

user2.sayHello();

user3.sayHello();

user4.sayHello();

Users.getUserCount();
