let answer = prompt("Təxmin edin: İlin ən orta ayı hansıdır?");

if (answer == "İyun" || answer == 6 || answer == "June") {
  alert("Əhsən!");
  console.log("İstifadəçinin təxmini doğrudur. - Kod 1");
} else {
  alert("Yenidən cəhd et... :)");
  console.log("İstifadəçinin təxmini səhvdir. - Kod 1");
}
