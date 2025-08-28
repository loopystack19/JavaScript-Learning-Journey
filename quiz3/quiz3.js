/*Write a javascript program to replace every character in a string with a character that follows it in the Alphabet */

var alphabetCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var newWord;

var transformWord = function (str) {
  let splitString = str.toLowerCase().split("");

  let newWordArray = [];

  let newWordChars = [];

  for (let i = 0; i < splitString.length; i++) {
    if (alphabetCharacters.includes(splitString[i])) {
      newWordArray.push(
        (alphabetCharacters.indexOf(splitString[i]) + 1) %
          alphabetCharacters.length
      );
    } else {
      newWordArray.push(splitString[i]);
    }
  }

  for (let j = 0; j < newWordArray.length; j++) {
    if (typeof newWordArray[j] !== "number") {
      newWordChars.push(newWordArray[j]);
    } else {
      newWordChars.push(alphabetCharacters[newWordArray[j]]);
    }
  }

  newWord = newWordChars.join("");

  console.log(newWord);
};

transformWord("z");
