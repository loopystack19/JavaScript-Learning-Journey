/*Hard Question

Create a grading system.

Input is a student’s marks (0–100).

Use if...else if...else to assign grades:

90–100 → Grade A

80–89 → Grade B

70–79 → Grade C

60–69 → Grade D

50–59 → Grade E

<50 → Fail

If the input is less than 0 or greater than 100, print "Invalid marks".*/

var textBox = document.getElementById("grade");

var submitBtn = document.getElementById("submit");

var gradeScored = document.getElementById("score");

submitBtn.onclick = function () {
  let marks = Number(textBox.value);

  if (isNaN(marks)) {
    gradeScored.classList.add("error");

    gradeScored.textContent = `Please provide your score in the right format`;
  } else {
    gradeScored.classList.remove("error");

    gradeScored.classList.add("correct");

    if (marks < 0 || marks > 100) {
      gradeScored.classList.add("error");

      gradeScored.textContent = `Ensure your marks is the range of 0 to 100`;
    } else if (marks >= 90 && marks <= 100) {
      gradeScored.textContent = `You scored:A 🥳`;
    } else if (marks >= 80 && marks < 90) {
      gradeScored.textContent = `You scored:B 🥳`;
    } else if (marks >= 70 && marks < 80) {
      gradeScored.textContent = `You scored:C `;
    } else if (marks >= 60 && marks < 70) {
      gradeScored.textContent = `You scored:D `;
    } else if (marks >= 50 && marks < 60) {
      gradeScored.textContent = `You scored:E `;
    } else {
      gradeScored.classList.add("error");
      gradeScored.textContent = `You failed`;
    }
  }
};
