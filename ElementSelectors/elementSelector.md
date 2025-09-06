-Element selectors are methods used to target and manipulate a single or multiple elements from the Dom

**.getElementById("html-id")**

-document.getElementById("html-id")-it returns a single element or null if it doesn't find that speific element

**coding quizes**

**1.Select the element with id="header" and change its background color to black.**

 <h1 id="header">My heading</h1>

let myHeading=document.getElementById("header");

myHeading.style.backgroundColor="black";

myHeading.style.color="white";

**I changed the h1 color to white so that it can be visible**

**2.Create a button with id="btn". Write JS so that when clicked, it alerts "Button Clicked".**

<button id="btn">Click me</button>

let clickMeBtn = document.getElementById("btn");

clickMeBtn.addEventListener("click", function(){

    window.alert("the button was clicked");

})

**I have studied events yet but that is what i remember from the previous time i studied events in js"**

**3.Select the element with id="title" and change its text to "Hello World".**

 <h1 id="title">My title is kinda cool</h1>

const titleElement=document.getElementById("title");

titleElement.textContent="Hello world";

**4.Select the element with id="main" and set its background color to gray.**

<h1 id="main">My title is kinda cool</h1>

const titleElement=document.getElementById("main");

titleElement.style.backgroundColor="grey";

titleElement.style.color="white";

**5.Select the element with id="note" and make its text bold.**

<p id="note">My title is kinda cool</p>

const titleElement=document.getElementById("note");

titleElement.style.fontWeight="bolder";

titleElement.style.fontSize="3rem";

**6.Select the element with id="price" and change its number to 100.**

<p id="price">300</p>

const titleElement=document.getElementById("price");

titleElement.textContent="100";

**7.Try selecting an element with id="footer". If it doesn’t exist, log "Not Found".**

-no idea

**document.getElementByClassName("html-class)**

-this method returns a html collection that is similar to an array but technically not the same

**sample programme**

<p class="fruits">Apple</p>
<p class="fruits">Banana</p>
<p class="fruits">Coconut</p>

const fruits=document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor="yellow";

**The only twist is that they don't have access to array methods, and if you want to use array methods you need to typecast**

**sample programme**

const fruits=document.getElementsByClassName("fruits");

Array.from(fruits).forEach((fruit)=>{

    fruit.style.backgroundColor="yellow";

});

**Questions on this**

**1.Select all elements with class "item" and change their text to "Updated"**

<p class="item">One</p>
<p class="item">Two</p>
<p class="item">Three</p>

onst itemText=document.getElementsByClassName("item");

Array.from(itemText).forEach((textItem)=>{

    textItem.textContent="updated";

})

**2.Select all elements with class "row" and set their background color to lightblue.**

<div class="row">Row 1</div>
<div class="row">Row 2</div>
<div class="row">Row 3</div>

const rowsElement=document.getElementsByClassName("row");

Array.from(rowsElement).forEach((row)=>{

    row.style.backgroundColor="lightblue"

})

**3.Select all elements with class "label" and make their text uppercase.**

<span class="label">small</span>
<span class="label">medium</span>
<span class="label">large</span>

const labelElement=document.getElementsByClassName("label");

Array.from(labelElement).forEach((labelText)=>{

    labelText.style.textTransform="uppercase"

})

**4.Select all elements with class "note" and print their innerText one by one.**

<p class="note">Note A</p>
<p class="note">Note B</p>
<p class="note">Note C</p>

const noteElement=document.getElementsByClassName("note");

for(let note of noteElement){

    console.log(note.innerText);

}

**5. Select all elements with class "box" and give each a black border.**

<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>

const boxElement=document.getElementsByClassName("box");

Array.from(boxElement).forEach((box)=>{

    box.style.border=" 1px solid black";
})
