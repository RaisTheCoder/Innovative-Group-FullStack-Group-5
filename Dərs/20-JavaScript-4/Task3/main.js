const numbers = [42, 255, 20, 100, 1000, 567, 76, 99, 31, 69];

const squares = [];

for (var i = 0; i < numbers.length; i++) {
  var square = numbers[i] ** 2;
  squares.push(square);
  
}

console.log(squares);