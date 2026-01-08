// let _name = prompt("Bir ad daxil edin.");

// let temp = _name.trim().split(" ");

// let firstName = temp[0].toLocaleLowerCase();
// firstName = firstName[0].toUpperCase() + firstName.slice(1);

// let lastName = "";
// if (temp[1]) {
//   lastName = temp[1].toLowerCase();
//   lastName = lastName[0].toUpperCase() + lastName.slice(1);
// }

// let fullName = lastName ? firstName + " " + lastName : firstName;

// console.log(fullName);

// if (!alert(fullName)) {
//   window.location.reload();
// }

let _name = prompt("Bir ad daxil edin.");

let words = _name.trim().split(/\s+/);

let capitalizedWords = words.map((word) => {
  word = word.toLowerCase();
  return word[0].toUpperCase() + word.slice(1);
});

let fullName = capitalizedWords.join(" ");

alert(fullName);
