let button = document.querySelector(".click");

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

button.addEventListener("click", () => {
  setInterval(() => {
    document.body.style.backgroundColor = getRandomColor();
  }, 1000);
});
