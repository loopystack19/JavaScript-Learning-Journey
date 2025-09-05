let clockText = document.getElementById("clock");

let startTime = 0;

let elapsedTime = 0;

let isRunning = false;

let timer;

function start() {
  if (!isRunning) {
    startTime = Date.now()-elapsedTime;

    timer = setInterval(update, 10);

    isRunning = true;
  }
}

function update() {
  currentTime = Date.now();

  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  hours = hours.toString().padStart(2, "0");

  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

  minutes = minutes.toString().padStart(2, "0");

  let seconds = Math.floor(elapsedTime / 1000);

  seconds = seconds.toString().padStart(2, "0");

  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  milliseconds = milliseconds.toString().padStart(2, "0");

  clockText.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function stop() {
  if (isRunning) {
    clearInterval(timer);

    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);

  startTime = 0;

  elapsedTime = 0;

  isRunning = false;

  clockText.textContent = `00:00:00:00`;
}
