//eventListener->This listens to a specific event and responds to that event, this makes the page interactive

.addEventListener(event, callback);

**sample programme**

const myBox = document.querySelector(".myBox");

const clickMeBtn = document.getElementById("action");

function mouseOverEvent() {
  myBox.style.backgroundColor = "yellow";

  myBox.textContent = "Do it 🥳";
}

clickMeBtn.addEventListener("mouseover", mouseOverEvent);

function mouseOutEvent() {
  myBox.style.backgroundColor = "lightgreen";

  myBox.textContent = "click me✌️";
}

clickMeBtn.addEventListener("mouseout",mouseOutEvent)

function clickEvent() {
  myBox.style.backgroundColor = "tomato";

  myBox.textContent = "😒 fuck off";
}

clickMeBtn.addEventListener("click",clickEvent);
