let bal = prompt("Aldığınız balı girin. (Defolt: 0)");

if (bal >= 0 && bal <= 29) {
  console.log("Qiymət: 2");
  alert("Qiymət: 2");
} else if (bal > 29 && bal <= 59) {
  console.log("Qiymət: 3");
  alert("Qiymət: 3");
} else if (bal > 59 && bal <= 79) {
  console.log("Qiymət: 4");
  alert("Qiymət: 4");
} else if (bal > 79 && bal <= 100) {
  console.log("Qiymət: 5");
  alert("Qiymət: 5");
} else {
  console.log("0 və 100 arası rəqəm girin.");
  alert("0 və 100 arası rəqəm girin.");
}
