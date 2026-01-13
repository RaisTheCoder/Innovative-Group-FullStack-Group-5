let a = 0;
let b = 1;
let c;

console.log(a);
console.log(b);

let terms = 10;

for (let i = 0; i < terms; i++) {
  c = a + b;
  console.log(c);
  a = b;
  b = c;
}