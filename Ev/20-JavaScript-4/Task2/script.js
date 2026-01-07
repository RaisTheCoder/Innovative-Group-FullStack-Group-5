const seats = ["A1", "A2", "A3", "B1", "B3", "C3"];
let seat = null;

let pickSeat = true;
let addSeat = false;

console.log("A, B, C-dən sırasından yer seçin. (Məs. A1)");
let choice = prompt("A, B, C-dən sırasından yer seçin. (Məs. A1)");

function listSeats() {
  seats.sort();
  console.log(`Mövcud yer sayı: ${seats.length}`);
  for (let i = 0; i < seats.length; i++) {
    console.log(seats[i]);
  }

  alert(`Mövcud yer sayı: ${seats.length}\n${seats.join(", ")}`);
  location.reload();
}

while (pickSeat) {
  if (seats.includes(choice)) {
    let index = seats.indexOf(choice);

    seat = choice;
    console.log(`Oturacaq ${choice} uğurla rezerv edildi.`);
    seats.splice(index, 1);
    pickSeat = false;
  } else if (!seats.includes(choice)) {
    console.log(`Oturacaq ${choice} mövcud deyil.`);
    addSeat = true;
    pickSeat = false;
  } else {
    alert("Seçim etməmisiz.");
    console.log("Seçim etməmisiz.");
    break;
  }
}

console.log("A, B, C-dən sırasından yer seçin. (Məs. A1)");

// V1
// while (addSeat) {
//   let newSeat = prompt("A, B, C-dən 1 və 3 arası yer seçin. (Məs. A1)");

//   if (seats.includes(newSeat)) {
//     console.log(`Oturacaq ${newSeat} artıq mövcuddur, yenidən cəhd edin.`);
//   } else if (!seats.includes(newSeat)) {
//     seats.push(newSeat);
//     console.log(`Oturacaq ${newSeat} uğurla əlavə edilmişdir.`);
//     addSeat = false;
//   } else {
//     console.log("Seçim etməmisiz.");
//   }
// }

// V2
while (addSeat) {
  let confirmation = prompt(`${choice} Mövcud deyil. Əlavə edilsin?\n1/Y) Bəli\n2/N) Xeyr`);

  if (confirmation == "Y" || confirmation == "1") {
    seats.push(choice);
    alert(`Oturacaq ${choice} uğurla əlavə edilmişdir.`);
    console.log(`Oturacaq ${choice} uğurla əlavə edilmişdir.`);
    addSeat = false;
  } else if (confirmation == "N" || confirmation == "2") {
    alert(`Oturacaq ${choice} əlavə edilmədi. (Ləğv edildi)`);
    console.log(`Oturacaq ${choice} əlavə edilmədi.`);
    addSeat = false;
  } else {
    alert("Seçim etməmisiz.");
    console.log("Seçim etməmisiz.");
  }
}

listSeats();
