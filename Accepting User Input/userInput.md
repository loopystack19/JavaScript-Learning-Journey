**How to accept and validate user input is an important thing**

-In javascript we can accept user input in two ways:

**1.Window prompt**-In javascript we can accept user input through the use of a window prompt and we can validate it to ensure its the right input through type casting

**Sample programme**

let age=window.prompt("How old are you?");

age=Number(age);

console.log(age);

**2.Using a HTML textbox**

**Sample programme**-lets write a simple programme where we accept some radius value from a user, validate it and give circumfrence and radius as output

<h3>minimalistic calculator</h3>
    <div class="container">
        <label for="radius">Radius:</label>
        <br>
        <input type="text" id="radius">
        <br>
        <br>
        <button id="submit">Submit</button>
        <br>
        <p id="circumfrence-value"></p>
        <br>
        <p id="area-value"></p>

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
