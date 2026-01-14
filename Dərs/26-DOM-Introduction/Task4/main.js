let title = document.querySelector("#title");
let button = document.querySelector("#button");

let jobs = [
  "Doctor",
  "E-Girl",
  "Cashier",
  "CEO",
  "Developer",
  "Barista",
  "Pizzaman",
];

let input = document.getElementById("input");

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

button.addEventListener("click", () => {
  let name = input.value;
  let random = Math.floor(Math.random() * jobs.length);
  title.style.color = "white";
  title.innerText = `${jobs[random]} ${name}`;

  document.body.style.backgroundColor = getRandomColor();

  if (name == "" || name == undefined) {
    title.innerText = `There's nobody's name here!`;
  }
});
