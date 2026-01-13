let temp = prompt("Temperaturu girin. (Defolt: 0)");

if (temp <= 0) {
  console.log("Hava çox soyuqdur.");
  alert("Hava çox soyuqdur.");
} else if (temp > 0 && temp <= 20) {
  console.log("Hava soyuqdur.");
  alert("Hava soyuqdur.");
} else if (temp > 20 && temp <= 35) {
  console.log("Hava istidir.");
  alert("Hava istidir.");
} else {
  console.log("Hava çox istidir.");
  alert("Hava çox istidir.");
}
