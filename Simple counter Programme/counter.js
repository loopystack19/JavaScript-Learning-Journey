var counterValue=document.getElementById("counter-value");

counter=0;

function increase(){

    counter++

    counterValue.textContent=`${counter}`
}

function reset(){

    counterValue.textContent=`0`
}

function decrease(){

    if(counter === 0){

        counterValue.textContent=`0`
    }else{

        counter--;

        counterValue.textContent = `${counter}`;
    }
}