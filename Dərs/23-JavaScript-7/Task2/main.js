let input = prompt("Palindrome checker").toLocaleLowerCase();
let reversed = [];

for (let i = input.length - 1; i >= 0; i--) {
  reversed.push(input[i]);
}

console.log(`${input} == ${reversed.join("")}`);

if (input[0] == reversed[0]) {
  if (!alert("Palindrome!")) {
    location.reload();
  }
} else {
  if (!alert("Not Palindrome.")) {
    location.reload();
  }
}
