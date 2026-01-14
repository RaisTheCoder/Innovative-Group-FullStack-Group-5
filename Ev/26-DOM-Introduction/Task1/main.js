function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

const blocks = [...document.querySelectorAll(".block")];

blocks.map((block) => {
  block.addEventListener("click", () => {
    block.style.backgroundColor = getRandomColor();
    block.style.color = "white";
  });
});
