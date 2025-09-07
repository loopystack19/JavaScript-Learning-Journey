**sample programme**

let myBox = document.getElementById("myBox");

let x = 0;

let y = 0;

let moveAmount = 10;

document.addEventListener("keydown", (event) => {
  event.preventDefault();

  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDon":
        y += moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;

    myBox.style.left = `${x}px`;
  }
});
