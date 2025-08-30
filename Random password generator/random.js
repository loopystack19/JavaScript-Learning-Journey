let allChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+abcdefghijklmnopqrstuvwxyz";

let password = "";

function generatePassword() {
  let passwordArray = [];

  splitChars = allChars.split("");

  for (let i = 0; i < 12; i++) {
    passwordArray.push(splitChars[Math.floor(Math.random() * 12)]);
  }

  password = passwordArray.join("");

  console.log(password);
}

generatePassword();
