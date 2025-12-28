//classList-Element property in js used to interact with an element's
//          list of classes, Allows you to make reuseable classes for many
//          elements across your webpage

//add()
//remove()
//toggle()
//replace()
//contains()

let myButton=document.getElementById("myButton");

//Using the add(). remove(), or toggle()

// myButton.addEventListener("click", event=>{
//     event.target.classList.toggle("enabled")
// })

//contains()

myButton.addEventListener("click", event=>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent+="🚫";
    }else{
        event.target.classList.replace("enabled","disabled");
    }
})

