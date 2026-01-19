let boxButton = document.getElementById("box");
let isRight = false;

boxButton.addEventListener("click", () => {
  if (isRight) {
    isRight = false;
    boxButton.style.transform = "translateX(0)";
    // boxButton.style.animation = "moveLeft 1.5s ease";
    // boxButton.style.animationFillMode = "forwards";
  } else {
    isRight = true;
    boxButton.style.transform = "translateX(calc(100vw - 250px))";
    // boxButton.style.animation = "moveRight 1.5s ease";
    // boxButton.style.animationFillMode = "forwards";
  }
});
