let boxButton = document.getElementById("box");

boxButton.addEventListener("click", () => {
  let steps = 0;
  if (steps === 0) {
    boxButton.style.transform = "translate(calc(50vw - 250px / 2), 0)";
    steps++;
  } else if (steps === 1) {
    boxButton.style.transform =
      "translate(calc(50vw - 250px / 2), calc(50vh - 250px / 2))";
    steps++;
  } else if (steps === 2) {
    boxButton.style.borderRadius = "50%";
    steps++;
  } else if (steps === 3) {
    boxButton.style.borderRadius = "7px";
    steps++;
  } else if (steps === 4) {
    boxButton.style.transform = "translate(calc(50vw - 250px / 2), 0";
    steps++;
  } else if (steps === 5) {
    boxButton.style.transform = "translate(0, 0)";
    steps = 0;
  }
});
