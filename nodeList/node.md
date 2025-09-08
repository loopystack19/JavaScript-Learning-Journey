----------node list------

A static collection of html elemnts that can be created using querySelectorAll(), similar to an array but does not support the filter, reduce, map , methods, node list won't automatically update to reflect changes

**sample-programme**

let myButtons=document.querySelectorAll(".myButtons");

myButtons.forEach(button=>{
    button.style.display="block";
    button.style.margin="10px";
    button.style.backgroundColor="blue";
    button.style.width="150px";
    button.style.height="25px"
    button.style.border="none";
    button.style.color="white";
    button.style.cursor="pointer";
})

myButtons.forEach(button=>{

    button.addEventListener("click", event=>{
        event.target.style.backgroundColor="lightgreen";
    })
})

