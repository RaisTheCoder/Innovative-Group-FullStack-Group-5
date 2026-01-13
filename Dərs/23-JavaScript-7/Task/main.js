let randomNumber = Math.floor(Math.random() * 50) + 1;
let tries = 5;
let attempts = 0;
let prevAttempts = [];
// console.log(randomNumber);

while (tries > 0) {
  let input = Number(
    prompt(`1 və 50 arası ədədi təxmin edin.\nŞans: ${tries} Cəhd: ${attempts}`)
      .trim()
      .replaceAll(" ", ""),
  );

  if (input == randomNumber && attempts == 0) {
    attempts += 1;
    if (!alert(`Təbriklər. Tək atdınız: ${randomNumber}!!!`)) {
      location.reload();
      break;
    }
  } else if (input == 0 || input == null || input == undefined) {
    alert("Yenidən cəhd edin.");
  } else if (input == randomNumber) {
    attempts += 1;
    if (!alert(`${attempts} cəhdlə doğru ədədi tapdınız: ${randomNumber}!`)) {
      location.reload();
      break;
    }
  } else if (input > randomNumber + 10) {
    tries -= 1;
    attempts += 1;
    prevAttempts.push(input);
    alert(`${input} Çox Yuxarıdır. Şans: ${tries} Cəhd: ${attempts}`);
  } else if (input < randomNumber - 10) {
    tries -= 1;
    attempts += 1;
    prevAttempts.push(input);
    alert(`${input} Çox Aşağıdır. Şans: ${tries} Cəhd: ${attempts}`);
  } else if (input < randomNumber) {
    tries -= 1;
    attempts += 1;
    prevAttempts.push(input);
    alert(`${input} Yuxarıdır. Şans: ${tries} Cəhd: ${attempts}`);
  } else if (input > randomNumber) {
    tries -= 1;
    attempts += 1;
    prevAttempts.push(input);
    alert(`${input} Aşağıdır. Şans: ${tries} Cəhd: ${attempts}`);
  }
}

console.log(prevAttempts);
if (!alert(`Oyun bitdi, doğru ədəd: ${randomNumber}`)) {
  location.reload();
}
