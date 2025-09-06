//creating a new element that wasn't initially in the html document

let newH1=document.createElement("h1");

//You add properties and attributes to the properties that were just created

newH1.textContent="I love pizza";

//You add it to the html document dynamically

document.body.prepend(newH1);->This adds the new element as the first child 

document.body.append(newH1)->This adds the new Element as the last child 

.insertBefore(newElement, currentElement)->This method allows you to insert something at a specific point in the DOM

.removeChild()-allows you to delete or remove a certain element from a the DOM dynamically

