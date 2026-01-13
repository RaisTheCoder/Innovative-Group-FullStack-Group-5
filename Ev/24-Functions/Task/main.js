let distance = +prompt(`Məsafə (km) daxil edin`);
let fuelPer100km = +prompt(
  `Hər 100km üçün istifadə edilən benzin miqdarını daxil edin`,
);
let price = +prompt(`1L (lirt) benzin qiymətini daxil edin`);

function calculateFuel(distance, fuelPer100km, price) {
  let fuelUsed = (distance / 100) * fuelPer100km;
  let cost = fuelUsed * price;

  if (
    !alert(
      `${distance}km-ə görə benzin sərfiyyatı: ${fuelUsed.toFixed(2)}L\nMəsafəyə görə benzin xərci: ${cost.toFixed(2)}AZN`,
    )
  ) {
    location.reload();
  }
}

calculateFuel(distance, fuelPer100km, price);
