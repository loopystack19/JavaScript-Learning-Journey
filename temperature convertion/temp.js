let textBox=document.getElementById("temp");

let farenheitRadioBtn=document.getElementById("farenheit");

let celciusRadioBtn=document.getElementById("celcius");

let results=document.getElementById("results");


function convertTemp(){

    let tempValue=Number(textBox.value);

    let temperature;

    if(isNaN(tempValue)){

        results.classList.add("error");

        results.textContent=`Error:Give a number value for the temperature`;
    }
    else if(!farenheitRadioBtn.checked && !celciusRadioBtn.checked){

        results.classList.add("error");

        results.textContent = `Error:Choose a unit to convert to by clicking one of the radio buttons`;

    }else{
        results.classList.remove("error");

        results.classList.add("correct")

        if(farenheitRadioBtn.checked){

            temperature=(5/9*(tempValue-32)).toFixed(2);

            results.textContent=`${temperature} Degree celcius`;

        }else{

            temperature=((9/5 * tempValue) + 32).toFixed(2);

            results.textContent=`${temperature} F`
        }
    }
}