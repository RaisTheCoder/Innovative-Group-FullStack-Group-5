const numArray = [];

while (numArray.length < 10) {
  let input = prompt(`İndeks ${numArray.length} üçün ədəd daxil edin`);
  let number = parseInt(input);

  if (input == "stop") {
    break;
  } else if (isNaN(number)) {
    console.log(`${input} bir ədəd deyil və ya siz birşey girməmisiz.`);
  } else {
    numArray.push(number);
  }
}

let min = Math.min(...numArray);
let max = Math.max(...numArray);

// for (let i = 0; i < numArray.length; i++) {
//   if (numArray[i] == Math.max(...numArray)) {
//     max = numArray[i];
//   } else if (numArray[i] == Math.min(...numArray)) {
//     min = numArray[i];
//   }
// }

console.log(`Ədədlər:\n
    ${numArray.join(", ")}\n
    Min: ${min}\n
    Max: ${max}`);
