const numbers = [42, 255, 20, 100, 1000, 567, 76, 99, 31, 69];
let highestNumber = undefined;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] == Math.max(...numbers)) {
    console.log((highestNumber = numbers[i]));
  }
}
