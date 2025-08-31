let textBox = document.getElementById("passwordTextBox");

let upperCaseCharCheckBox = document.getElementById("upperCaseChars");
let lowerCaseCharCheckBox = document.getElementById("lowerCaseChars");
let numberCharsCheckBox = document.getElementById("numberChars");
let symbolCharCheckBox = document.getElementById("symbolChars");

document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  
  textBox.classList.remove("error", "correct");
  textBox.value = "";

  let passwordLength = Number(document.getElementById("length").value);

  let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  let numberChars = "1234567890";
  let symbolChars = "~!@#$%^&*()_+=";

  let allowedChars = "";

  if (upperCaseCharCheckBox.checked) {
    allowedChars += upperCaseChars;
  }
  if (lowerCaseCharCheckBox.checked) {
    allowedChars += lowerCaseChars;
  }
  if (numberCharsCheckBox.checked) {
    allowedChars += numberChars;
  }
  if (symbolCharCheckBox.checked) {
    allowedChars += symbolChars;
  }

  if (isNaN(passwordLength)) {
    textBox.classList.add("error");
    textBox.value = "Error: input a number value";
    return;
  }

  if (passwordLength < 8) {
    textBox.classList.add("error");
    textBox.value = "Error: password length should be at least 8";
    return;
  }

  if (allowedChars.length === 0) {
    textBox.classList.add("error");
    textBox.value = "Error: select at least one character type";
    return;
  }


  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  textBox.classList.add("correct");
  textBox.value = password;
}


let generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click",function(){

    generateBtn.classList.add("animation-loading");
})