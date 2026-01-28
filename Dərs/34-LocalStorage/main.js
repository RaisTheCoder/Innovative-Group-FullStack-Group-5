let h1 = document.getElementById("h1");
let submit = document.getElementById("submit");
let input = document.getElementById("input");

let _name = localStorage.getItem("name");

if (_name == null || _name == "" || _name == undefined) {
  h1.classList.toggle("hidden", true);
} else {
  h1.classList.toggle("hidden");
  h1.innerText = `Hello ${_name}`;
}

submit.addEventListener("click", () => {
  if (input.value != "" && input.value != null && input.value != undefined) {
    h1.classList.toggle("hidden", false);
    localStorage.setItem("name", input.value);
    _name = localStorage.getItem("name");
    h1.innerText = `Hello ${_name}`;
  }
});
