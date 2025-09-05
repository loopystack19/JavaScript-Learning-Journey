function calculateInterest() {
  let simpleInterest;

  let compoundInterest;

  let principalValue = Number(document.getElementById("principal").value);

  let rateValue = Number(document.getElementById("rate").value);

  let timeValue = Number(document.getElementById("time").value);

  let simpleInterestCheckBox = document.getElementById("simpleInterest");

  let compoundInterestCheckBox = document.getElementById("compoundInterest");

  let resultsText = document.getElementById("results");

  if (!simpleInterestCheckBox.checked && !compoundInterestCheckBox.checked) {
    resultsText.classList.add("error");

    resultsText.textContent =
      "You need to select at least one interest type from the options below";
  } else if (Number.isNaN(principalValue) || principalValue < 0) {
    resultsText.classList.add("error");

    resultsText.textContent =
      "The principal value needs to be of Number data type and greater than zero";
  } else if (Number.isNaN(rateValue) || rateValue < 0) {
    resultsText.classList.add("error");

    resultsText.textContent =
      "The rate value needs to be of Number data type and greater than zero";
  } else if (Number.isNaN(timeValue) || timeValue < 0) {
    resultsText.classList.add("error");

    resultsText.textContent =
      "The time value needs to be of Number data type and greater than zero";
  } else {
    resultsText.classList.remove("error");

    resultsText.classList.add("correct");

    if (simpleInterestCheckBox.checked) {
      simpleInterest = (principalValue * rateValue * timeValue).toFixed(2);

      resultsText.textContent = `${simpleInterest}`;
    } else {
      compoundInterest = Math.pow(principalValue * ((rateValue / 100) + 1),timeValue).toFixed(2);

      resultsText.textContent=`${compoundInterest}`
    }
  }
}
