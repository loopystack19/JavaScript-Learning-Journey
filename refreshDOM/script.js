//Am going to be so honest with myself, i have really struggled with DOM and thats the main reason am going through this again,
// This is actually a seperate DOM folder, where i note the things i didn't see and how they come into play in the real project

//1. Element selectors
//a) document.getElementById->Returns a single element or returns null

// let myH1=document.getElementById("myH1");
// myH1.style.backgroundColor="Yellow";
// myH1.style.fontFamily="monospace";
// myH1.style.color="red";
// myH1.style.textAlign="center";

//b)document.getElementByClassName=>returns a html collection

// const fruits=document.getElementsByClassName("fruits")

// for(const fruit of fruits){
//     fruit.style.backgroundColor="green";
//     fruit.style.color="white";
//     fruit.style.border="1px solid black";
//     fruit.style.padding="30px";
//     fruit.style.textAlign="center";
// }
//Note html collection don't have access to in built array methods
// You need to type cast them to be able to use them

//Array.from(fruits).forEach();=>This is how you type a html collection

//c)document.getElementByTagName()=>This also returns a html collection

// const h4Elements=document.getElementsByTagName("h4");
// for(const h4Element of h4Elements){
//     h4Element.style.backgroundColor="blue";
//     h4Element.style.color="white";
//     h4Element.style.textAlign="center";
//     h4Element.style.padding="8px";
// }

// const listElements=document.getElementsByTagName("li");

// for(const listElement of listElements){
//     listElement.style.backgroundColor="violet";
//     listElement.style.textAlign="center";
//     listElement.style.listStyle="none";
//     listElement.style.padding="15px";
//     listElement.style.border="1px solid black";
//     listElement.style.color="white";
//     listElement.style.textTransform="capitalize";
// }

//d) document.querySelector()=>This returns a single element, the first Match or null

// const singleMatch=document.querySelector(".fruits");
// singleMatch.style.backgroundColor="red";

//e) document.querySelectorAll()=>This method returns a node list

// const foods=document.querySelectorAll("li");

// foods.forEach(food=>{
//     food.style.backgroundColor="blue";
//     food.style.textAlign="center";
//     food.style.padding="20px";
//     food.style.border="1px solid white";
//     food.style.listStyle="none";
//     food.style.color="white";
//     food.style.textTransform="upperCase";
// })


//DOM navigation-The process of navigating the structure of a html doc using js
//.firstElementChild->This selects the first element in an enclosed loop

// const ulElements=document.querySelectorAll("ul");

// ulElements.forEach(ulElement=>{

//     let firstChildElement=ulElement.firstElementChild;

//     firstChildElement.style.background="yellow";
// });

//.lastElementChild-does the opposite, selects the last element child


// ulElements.forEach(ulElement=>{

//     const lastChild=ulElement.lastElementChild;

//     lastChild.style.backgroundColor="red";
// });

//.nextElementSibling=>This one works with ids, you need to select and element, the nextElementSibling moves by 1 from the selected element

// const appleElement=document.getElementById("apples");

// let nextSibling=appleElement.nextElementSibling;

// nextSibling.style.backgroundColor="lightgreen";

//.previousElementSibling=>does the opposite of nextElementSibling


// const coconutElement=document.getElementById("coconut")

// let previousSibling=coconutElement.previousElementSibling;

// previousSibling.style.backgroundColor="blue";

//.parentElement=>This selects the entire thing

// const iceCream=document.getElementById("iceCream");

// let parentElement=iceCream.parentElement;

// parentElement.style.backgroundColor="black";

//.children=>This selects all the children of a selected element
//it returns a html collection 
// 

//Adding and removing html elements


//step 1 create the element

// const newH1=document.createElement("h1");
// newH1.textContent="I love pizza";
// newH1.style.color="tomato";
// newH1.style.textAlign="center";
// newH1.id="myH1";
//step 2 append the element
// document.body.prepend(newH1);
//When you use the append method, it becomes the last child the selected element
//.insertBefore(newElement, currentElement);

// const box2=document.getElementById("box2");

// document.body.insertBefore(newH1,box2)

//Removing an element

// document.body.removeChild(newH1);

//Create the element

// const orangeElement=document.createElement("li");
// orangeElement.textContent="Orange";
// orangeElement.style.fontWeight="bold";
// orangeElement.style.backgroundColor="lightgreen";

// let listItems=document.querySelectorAll("#fruits li");

// document.getElementById("fruits").insertBefore(orangeElement, listItems[0]);







