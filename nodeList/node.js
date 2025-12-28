// node a list a collection like arrays but they don't have in built methods like map, filter and reduce

let myButtons=document.querySelectorAll("button");

myButtons.forEach(button=>{
    Object.assign(button.style,{
        backgroundColor:"lightblue",
        display:"block",
        width:"100%",
        padding:"30px",
        margin:"5px auto",
        border:"1px solid black"
    })
});

//Adding event listener

myButtons.forEach(button=>{
    button.addEventListener("click",event=>{
        Object.assign(button.style,{
            backgroundColor:"blue",
            color:"white",
            fontSize:"3rem"
        })
    })
});

//Adding an element to a node list

const newButton=document.createElement("button");// step 1

newButton.textContent="Hello am a new Button 😊";
// step 2 adding style to the element
Object.assign(newButton.style,{
    backgroundColor:"green",
    color:"white",
    padding:"30px",
    width:"100%",
    height:"125px"
});

//step 3 Appending the element

document.body.appendChild(newButton);

//After creating this element, it wont automatically reflect in the nodelist because they are static

myButtons=document.querySelectorAll("button");


myButtons.forEach(button=>{
    button.addEventListener("click", event=>{
        event.target.remove();
        myButtons=document.querySelectorAll("button");
    })
})
