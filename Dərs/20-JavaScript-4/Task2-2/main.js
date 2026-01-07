const numbers = [42, 255, 20, 100, 1000, 567, 76, 99, 31, 69];
let max = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] >= max) {
    max = numbers[i];
  }
}

console.log(max);
