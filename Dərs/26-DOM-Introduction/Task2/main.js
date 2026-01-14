let image = document.querySelector("#image");
let button = document.querySelector("#button");

let colors = ["red", "green", "blue", "orange", "yellow", "purple"];

button.addEventListener("click", () => {
  let randomCol = Math.floor(Math.random() * colors.length);
  button.style.backgroundColor = colors[randomCol];

  if (image.style.visibility == "hidden") {
    image.style.visibility = "visible";
    button.innerHTML = "Hide Image";
  } else {
    image.style.visibility = "hidden";
    button.innerHTML = "Show Image";
  }
});
