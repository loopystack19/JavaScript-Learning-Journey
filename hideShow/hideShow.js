
const myButton=document.getElementById("myButton");

const myImage=document.getElementById("myImg");

myButton.addEventListener("click", event=>{

    if(myImage.style.display==="block"){

        myImage.style.display="none";

        myButton.textContent="show";
    }else{

        myImage.style.display="block";

        myButton.textContent="hide";
    }
})