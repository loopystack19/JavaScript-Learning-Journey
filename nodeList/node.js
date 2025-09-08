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