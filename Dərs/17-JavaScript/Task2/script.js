let age = prompt("Yaşınızı daxil edin.");

if (age >= 1 && age <= 13) {
  console.log("DENIED, The user is a Junior, access denied.");
} else if (age >= 13 && age < 18) {
  console.log("DENIED The user is a Teenager, maybe wait few years more.");
} else if (age >= 18 && age < 30) {
  console.log("ALLOWED, The user is an Adult, user allowed in.");
} else if (age >= 30 && age < 70) {
  console.log("ALLOWED, The user is Middle-Aged.");
} else if (age >= 70) {
  console.log("ALLOWED, The user is an Elder.");
} else if (age < 1 && age) {
  console.warn("DENIED, Are you even born? (Cannot be less or equal to 0)");
} else {
  console.warn("DENIED, Please enter your age again.");
}