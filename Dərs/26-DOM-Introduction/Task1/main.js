let image = document.querySelector("#image");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
  if (image.style.visibility == "hidden") {
    image.style.visibility = "visible";
    button.innerHTML = "Hide Image";
  } else {
    image.style.visibility = "hidden";
    button.innerHTML = "Show Image";
  }
});
