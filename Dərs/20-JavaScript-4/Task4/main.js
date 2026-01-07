const products = ["Yumurta", "Süd", "Un", "Yağ", "Kərə Yağı", "Vanilla"];
const basket = [];

while (basket.length < 3) {
  let choice = prompt(`Ərzaqlar: ${products}`);

  if (products.includes(choice)) {
    if (basket.includes(choice)) {
      alert(`Məhsul ${choice} artıq səbətdə mövcuddur.`);
      console.log(`Məhsul ${choice} artıq səbətdə mövcuddur.`);
    } else {
      alert(`Məhsul ${choice} səbətə uğurla əlavə edildi.`);
      basket.push(choice);
    }
  } else if ((choice == "" && choice == choice.trim) || choice == null) {
    alert("Zəhmət olmasa əşya adını yazın.");
    console.log("Zəhmət olmasa əşya adını yazın.");
  } else {
    alert(`${choice} ərzaqlara daxil deyil. Qısa zamanda əlavə ediləcəkdir.`);
    console.log(
      `${choice} ərzaqlara daxil deyil. Qısa zamanda əlavə ediləcəkdir.`,
    );
  }
}

for (var i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}
