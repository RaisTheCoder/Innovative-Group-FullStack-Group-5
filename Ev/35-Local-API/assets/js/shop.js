const prodTemplate = document.getElementById("ProdTemplate");
const products = document.querySelector("#products");
const music = new Audio("./assets/audio/select-the-method.mp3");
music.loop = true;
music.volume = 0.5;

let searchInput = document.getElementById("search");

let isPlaying = false;

document.getElementById("now-playing").style.opacity = "0";
document.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
    document.getElementById("now-playing").style.opacity = "1";
  }
});

let items = fetch("./assets/data/hardware.json").then((resp) => resp.json());

function renderItems(itemsList) {
  products.innerHTML = "";

  itemsList.forEach((item) => {
    let cloneTemp = prodTemplate.content.cloneNode(true);
    let itemName = cloneTemp.querySelector(".prod-name");
    let itemPrice = cloneTemp.querySelector(".prod-price");
    let itemImage = cloneTemp.querySelector(".prod-image");
    let addCart = cloneTemp.querySelector(".add");

    itemName.innerText = item.name;
    itemPrice.innerHTML =
      item.price +
      'P <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net/roblox/images/8/8a/Player_Points.png/revision/latest?cb=20150803194533" style="width:16px;height:16px;margin-left:2px;" />';
    itemImage.setAttribute("src", item.image);
    itemImage.setAttribute("alt", item.image_alt);

    addCart.addEventListener("click", () => addToCart(item));

    products.append(cloneTemp);
  });
}

items.then((items) => {
  renderItems(items);
});

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase();

  items.then((itemsList) => {
    const filtered = [...itemsList].filter((item) =>
      item.name.toLowerCase().includes(query),
    );

    renderItems(filtered);
  });
});
