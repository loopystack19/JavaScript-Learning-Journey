/* Write a program that takes a number as input.
If the number is positive, print "Positive".
If it’s negative, print "Negative".
 If it’s zero, print "Zero".
If it’s not a number (like text), print "Invalid input".*/

var textBox = document.getElementById("value");

var submitBtn = document.getElementById("submit");

var conclusion = document.getElementById("conclusion");

submitBtn.onclick = function () {
  let inputValue = Number(textBox.value);

  if (isNaN(inputValue)) {
    conclusion.classList.add("error");

    conclusion.textContent = `Invalid input`;
  } else {
    conclusion.classList.remove("error");
    if (inputValue > 0) {
      conclusion.classList.add("correct");

      conclusion.textContent = `Positive Number`;
    } else if (inputValue < 0) {

      conclusion.classList.add("correct");

      conclusion.textContent = `negative Number`;
    } else {

      conclusion.classList.add("correct");

      conclusion.textContent = `this is a zero`;
    }
  }
};
