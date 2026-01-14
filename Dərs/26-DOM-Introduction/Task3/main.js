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

button.addEventListener("click", () => {
  let name = input.value;
  let random = Math.floor(Math.random() * jobs.length);
  title.innerHTML = `${jobs[random]} ${name}`;
});