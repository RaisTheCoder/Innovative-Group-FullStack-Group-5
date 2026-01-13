const students = [
  {
    id: 1,
    name: "Rais",
    points: 100,
  },
  {
    id: 2,
    name: "Ramazan",
    points: 90,
  },
  {
    id: 3,
    name: "Nurcahan",
    points: 95,
  },
  {
    id: 4,
    name: "Rəhman",
    points: 85,
  },
  {
    id: 5,
    name: "Vüsalə",
    points: 95,
  },
  {
    id: 6,
    name: "Vüsalə", // Duplikat ad testi <3
    points: 95,
  },
];

let student = prompt(`Görmək istədiyiniz tələbənin balını girin`);

function findById(id) {
  return students.find((student) => student.id === id);
}

function findByName(name) {
  return students.filter((student) => student.name === name);
}

function findAllByPoints(points) {
  return students.filter((student) => student.points === points);
}

if (student <= students.length && student >= 1) {
  selected = findById(+student);
} else if (student == undefined) {
  console.log("Daxil edilən ədəd düzgün deyil.");
} else {
  selected = findByName(student);
}

console.log(selected);
