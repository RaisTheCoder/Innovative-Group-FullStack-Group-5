/** @type {HTMLElement} */
let input = document.querySelector("#prod-input");
/** @type {HTMLElement} */
let button = document.querySelector("#add-prod");

let prodList = document.querySelector("#prod-list");

let prodPlaceholder = document.querySelector(".placeholder-prod");

function addProd() {
  let inputVal = input.value;

  if (inputVal === null || inputVal === undefined || inputVal === "") {
    input.placeholder = "You left this empty";
    button.disabled = true;
    input.disabled = true;
    setTimeout(() => {
      input.placeholder = "Enter product name.";
      button.disabled = false;
      input.disabled = false;
    }, 600);
  } else {
    let product = document.createElement("li");
    product.classList.add("product");
    let prodName = document.createElement("strong");
    prodName.innerText = inputVal;
    product.append(prodName);

    input.value = null;

    let rm = document.createElement("button");
    product.append(rm);
    rm.innerHTML = '<i class="fa-solid fa-x"></i>';
    rm.addEventListener("click", () => {
      product.remove();
    });

    button.disabled = true;
    input.disabled = true;
    setTimeout(() => {
      button.disabled = false;
      input.disabled = false;
    }, 600);

    prodList.append(product);
  }
}

button.addEventListener("click", addProd);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addProd();
  }
});
