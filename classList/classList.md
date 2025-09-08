- Classlist allow you to make reusable classes that can be dynamically added or removed from an element

//add()

**sample programme**

 <button id="myButton">button 1 </button>

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#myButton{
    font-size: 4rem;
    margin: 10px;
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
}
.enabled{
    background-color: black;
    color: white;
    text-transform: capitalize;
    cursor: pointer;
}

const myButton=document.getElementById("myButton");

myButton.addEventListener("click", event=>{

    event.target.classList.add("enabled");
});

//toggel()->Removes a class if present , add if not present

//replace("old class", "new class")

//contains()-returns true if a particular element contains a particular class

