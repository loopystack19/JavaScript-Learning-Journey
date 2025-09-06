const textBox = document.getElementById("textBox");

const submitBtn = document.getElementById("submit");

function createTask() {
  const information = textBox.value;

  let task = document.createElement("li");

  task.textContent = `${information}`;

  task.style.fontWeight = "bold";

  task.style.textTransform="capitalize";

  document.getElementById("task-list").append(task);

  textBox.value="";
}
