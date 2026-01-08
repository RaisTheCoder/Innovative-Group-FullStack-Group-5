let _name = prompt("Ad girin");

let fixedName = _name.toLocaleLowerCase().trim();
let randomNumber = Math.floor(Math.random() * 50000);

let userName = fixedName + randomNumber;

console.log(userName);

if (!alert(userName)) {
  location.reload();
}
