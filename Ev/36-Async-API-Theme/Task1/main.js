let productContainer = document.getElementById("products");
let loadMore = document.getElementById("load-more");

let productTemplate = document.getElementById("prod-template");

let loadBtn = document.getElementById("load-btn");
let srcInput = document.getElementById("search");

let switchTheme = document.getElementById("switch-theme");

// Options
let limit = 12;
let skip = 0;
let currency = `AZN`;

let currentTheme = localStorage.getItem("currentTheme");

if (currentTheme == "Dark") {
  changeTheme();
}

let searchQuery;

let loadedProducts = [];

async function loadProducts() {
  let API = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
  );
  let productsRetrieved = await API.json();

  productsRetrieved.products.forEach((product) => {
    loadedProducts.push(product);
  });

  searchProducts(searchQuery);

  if (loadedProducts.length >= productsRetrieved.total) {
    loadBtn.style.display = "none";
  }
}

function searchProducts(searchQuery) {
  if (searchQuery) {
    let filteredProducts = loadedProducts.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    renderProducts(filteredProducts);
  } else {
    renderProducts(loadedProducts);
  }
}

function renderProducts(prodArray = []) {
  productContainer.innerHTML = "";
  prodArray.forEach((product) => {
    let prodTempClone = productTemplate.content.cloneNode(true);

    let prodName = prodTempClone.querySelector(".prod-title");
    prodName.innerText = `${product.title}`;

    let prodPrice = prodTempClone.querySelector(".prod-price");
    prodPrice.innerText = `${product.price} ${currency}`;

    let prodThumb = prodTempClone.querySelector(".prod-thumbnail");
    prodThumb.setAttribute("src", `${product.thumbnail}`);
    prodThumb.setAttribute("alt", `${product.title}`);

    productContainer.append(prodTempClone);
  });
}

function loadMoreProds() {
  skip += limit;

  loadProducts();

  if (searchQuery) {
    searchProducts(searchQuery);
  } else {
    searchProducts(searchQuery);
  }
}

function changeTheme() {
  if (document.body.classList.contains("light")) {
    document.body.classList.replace("light", "dark");
    switchTheme.querySelector("i").classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("currentTheme", "Dark");
  } else {
    document.body.classList.replace("dark", "light");
    switchTheme.querySelector("i").classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("currentTheme", "Light");
  }
}

loadProducts();

loadBtn.addEventListener("click", loadMoreProds);

srcInput.addEventListener("keydown", (e) => {
  searchQuery = srcInput.value;
  if (e.key == "Enter") {
    searchProducts(searchQuery);
  } else if (srcInput.value.length - 1 == 0) {
    searchProducts();
  }
});

switchTheme.addEventListener("click", changeTheme);
