let cart = [];
let cartCount = document.getElementById("cart-count");
let cartBtn = document.getElementById("cart-btn");
let main = document.querySelector("main");

let cartMenu = document.createElement("section");
cartMenu.id = "cart-menu";
cartMenu.innerHTML = `
  <div id="cart-header">Cart</div>
    <hr />
    <article id="cart-body">
    <template id="cart-item-temp">
      <div class="cart-item">
        <img class="cart-item-img" src="./assets/image/gpu-placeholder.jpg" alt="" />
        <strong class="cart-item-name">ITEM NAME</strong>
        <p class="cart-item-price-total">000P</p>
        <div class="right">
          <input type="text" class="cart-item-quantity" />
          <button><i class="fa-solid fa-x"></i></button>
        </div>
      </div>
    </template>
    </article>
    <hr />
    <p id="cart-total">Total: 0P</p>
`;

main.append(cartMenu);

let cartItemTemp = cartMenu.querySelector("#cart-item-temp");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  let saved = localStorage.getItem("cart");

  if (saved) {
    cart = JSON.parse(saved);

    if (cart.length > 0) {
      cartCount.innerText = cart.length;
      cartCount.style.display = "flex";
    } else {
      cartCount.style.display = "none";
    }
  } else {
    cartCount.style.display = "none";
  }
}

function addToCart(newItem) {
  let existing = cart.find((item) => item.id === newItem.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    newItem.quantity = 1;
    cart.push(newItem);
  }
  saveCart();
  loadCart();
  renderCartItems();
}

function renderCartItems() {
  const cartBody = cartMenu.querySelector("#cart-body");
  cartBody.innerHTML = "";

  cart.forEach((item, index) => {
    let cartItem = cartItemTemp.content.cloneNode(true);

    cartItem.querySelector(".cart-item-name").innerText = item.name;
    cartItem.querySelector(".cart-item-img").src =
      item.img || "./assets/image/gpu-placeholder.jpg";

    let removeBtn = cartItem.querySelector("button");
    removeBtn.dataset.index = index;
    removeBtn.addEventListener("click", (e) => {
      cart.splice(index, 1);
      saveCart();
      loadCart();
      renderCartItems();
    });

    let quantityInput = cartItem.querySelector(".cart-item-quantity");
    quantityInput.value = item.quantity || 1;
    quantityInput.dataset.index = index;

    quantityInput.addEventListener("input", (event) => {
      let newQuantity = Math.floor(Number(event.target.value));
      if (isNaN(newQuantity) || newQuantity < 1) newQuantity = 1;

      cart[index].quantity = newQuantity;
      saveCart();

      let itemParent = event.target.closest(".cart-item");
      let itemTotalPrice = itemParent.querySelector(".cart-item-price-total");
      if (itemTotalPrice) {
        itemTotalPrice.innerHTML = `
          ${item.price * newQuantity}P 
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net/roblox/images/8/8a/Player_Points.png/revision/latest?cb=20150803194533"
          alt="R$" style="width:16px;height:16px;margin-left:2px;" />
        `;
      }

      let total = cart.reduce(
        (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
        0,
      );
      let totalElement = cartMenu.querySelector("#cart-total");
      if (totalElement) {
        totalElement.innerHTML = `Total: ${total}P 
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net/roblox/images/8/8a/Player_Points.png/revision/latest?cb=20150803194533"
          style="width:16px;height:16px;margin-left:2px;" />`;
      }
    });

    let total = cart.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0,
    );
    let totalElement = cartMenu.querySelector("#cart-total");
    if (totalElement) {
      totalElement.innerHTML = `Total: ${total}P 
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net/roblox/images/8/8a/Player_Points.png/revision/latest?cb=20150803194533"
        style="width:16px;height:16px;margin-left:2px;" />`;
    }
    let itemTotalPrice = cartItem.querySelector(".cart-item-price-total");
    if (itemTotalPrice) {
      itemTotalPrice.innerHTML = `
    ${item.price * (item.quantity || 1)}P
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net/roblox/images/8/8a/Player_Points.png/revision/latest?cb=20150803194533"
    alt="R$" style="width:16px;height:16px;margin-left:2px;" />
  `;
    }
    cartBody.appendChild(cartItem);
  });

  let total = 0;
  cart.forEach((item) => (total += (item.price || 0) * (item.quantity || 1)));

  let totalElement = cartMenu.querySelector("#cart-total");
  if (totalElement)
    totalElement.innerHTML = `Total: ${total}P <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Froblox%2Fimages%2F8%2F8a%2FPlayer_Points.png/revision/latest?cb=20150803194533" style="width:16px;height:16px;margin-left:2px;" />`;
}

let cartMenuClass = document.getElementById("cart-menu");
let isCartOpen = false;
function openCart() {
  if (!isCartOpen) {
    isCartOpen = true;
    cartMenuClass.style.display = "flex";
  } else {
    isCartOpen = false;
    cartMenuClass.style.display = "none";
  }
}

loadCart();
renderCartItems();

cartBtn.addEventListener("click", openCart);
