let currency = "AZN"; // Optional currency sign

// Array
const products = [
  {
    id: 1,
    name: "Lenovo",
    model: "LOQ 15AHP10",
    category: "Kompüter",
    price: "2399" + ` ${currency}`,
  },
  {
    id: 2,
    name: "Volga",
    model: "31",
    category: "Maşın",
    price: "3169" + ` ${currency}`,
  },
  {
    id: 3,
    name: "ASUS Vivobook",
    model: "M3500QA",
    category: "Kompüter",
    price: "2099" + ` ${currency}`,
  },
];

// Functions
function findProdById(id = 1) {
  return products.find((item) => item.id === id);
}

function findByName(name) {
  return products.filter((item) => item.name === name);
}

function findAllByCategory(category) {
  return products.filter((item) => item.category === category);
}

// Main
let input = app();

function app() {
  let input = +prompt(
    `Axtarmaq istədiyiniz metodu seçin\n1) Ad | 2) Kateqoriya | 3) İdentifikasiya (ID)`,
  );

  while (true) {
    switch (input) {
      case 1:
        input = prompt(`Əşya adı daxil edin`);
        return findByName(input);
      case 2:
        input = prompt(`Əşya kateqoriyası daxil edin`);
        return findAllByCategory(input);
      case 3:
        input = +prompt(`İdentifikasiya nömrəsini daxil edin`);
        return findProdById(input);
      default:
        if (!alert("Düzgün dəyər daxil edilməyib.")) {
          location.reload();
        }
        break;
    }
  }
}

console.log(input);
