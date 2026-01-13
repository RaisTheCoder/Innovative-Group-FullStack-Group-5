let distance = +prompt(`Məsafə (km) daxil edin`);
let fuelPer100km = +prompt(
  `Hər 100km üçün istifadə edilən benzin miqdarını daxil edin`,
);
let price = +prompt(`1L (lirt) benzin qiymətini daxil edin`);

function calculateFuel(distance, fuelPer100km, price) {
  let fuelUsed = (distance / 100) * fuelPer100km;
  let cost = fuelUsed * price;

  console.log(`${distance} km məsafəyə görə benzin sərfiyyatı: ${fuelUsed} L`);
  console.log(`${distance} km məsafəyə görə benzin xərci: ${cost} AZN`);
}

calculateFuel(distance, fuelPer100km, price);
