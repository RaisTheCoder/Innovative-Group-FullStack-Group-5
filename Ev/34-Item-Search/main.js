let template = document.getElementById("cardTemplate");
let container = document.getElementById("products");
let srcInput = document.getElementById("srcInput");
const select = document.getElementById("categorySelect");

let visibleCount = 8;
let allProducts = [];

function displayProducts(searchTerm = "") {
  let filtered = allProducts.filter((p) => {
    if (!searchTerm) {
      return true;
    }

    return (
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const limited = filtered.slice(0, visibleCount);

  container.innerHTML = "";

  limited.forEach((product) => {
    const card = template.content.cloneNode(true);

    card.querySelector(".name").innerText = product.title;
    card.querySelector(".price").innerText = `$${product.price}`;
    card.querySelector(".desc").innerText = product.description;
    card.querySelector("img").src = product.image;

    container.appendChild(card);
  });
}

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data;
    displayProducts();
  });

fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((categories) => {
    categories.forEach((cat) => {
      const option = document.createElement("option");
      option.value = cat;
      option.textContent = cat;
      select.appendChild(option);
    });
  });

window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
    visibleCount += visibleCount;
    displayProducts();

    if (srcInput.value != null || srcInput.value != "") {
      displayProducts(srcInput.value);
    }
  }
});

srcInput.addEventListener("input", () => {
  visibleCount = visibleCount;
  displayProducts(srcInput.value);
});

select.addEventListener("change", () => {
  const selected = select.value;
  visibleCount = 15;

  let url = "https://fakestoreapi.com/products";
  if (selected) {
    url = `https://fakestoreapi.com/products/category/${encodeURIComponent(selected)}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allProducts = data;
      displayProducts(srcInput.value);
    });
});
