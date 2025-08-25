let textBox = document.getElementById("radius");

let submitBtn = document.getElementById("submit");

let circumfrenceValue = document.getElementById("circumfrence-value");

let areaValue = document.getElementById("area-value");

const PI =3.1415;

submitBtn.onclick=function(){

    let circumfrence;

    let area;

    let radius=textBox.value;

    if(isNaN(radius)){

        circumfrenceValue.classList.remove("correct");

        circumfrenceValue.classList.add("error");

        areaValue.classList.remove("correct");

        areaValue.classList.add("error");

        circumfrenceValue.textContent=`Please provide a number value for the radius`;

        areaValue.textContent="";
    }else{

        circumfrenceValue.classList.remove("error");

        circumfrenceValue.classList.add("correct");

        areaValue.classList.remove("error");

        areaValue.classList.add("correct");

        circumfrence=(2 * PI * radius).toFixed(2);

        circumfrenceValue.textContent=`Your circumfrence is: ${circumfrence}`;

        area=(2*PI * Math.pow(radius,2)).toFixed(2);

        areaValue.textContent=`Your area is: ${area}`;
    }
}