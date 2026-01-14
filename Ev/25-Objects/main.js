const students = [
  {
    id: 1,
    name: "Rais",
    surname: "Fatullayev",
    city: "Khirdalan",
    age: 18,
    avg_points: 100,
  },
  {
    id: 2,
    name: "Ramazan",
    surname: "Unknown",
    city: "Baku",
    age: 23,
    avg_points: 90,
  },
  {
    id: 3,
    name: "Nurcahan",
    surname: "Afandizada",
    city: "Gobu",
    age: 19,
    avg_points: 95,
  },
  {
    id: 4,
    name: "Rəhman",
    surname: "Unknown",
    city: "Baku",
    age: 28,
    avg_points: 85,
  },
  {
    id: 5,
    name: "Vüsalə",
    surname: "Salmanova",
    city: "Baku",
    age: 23,
    avg_points: 95,
  },
];

function getInputs() {
  let city = prompt(`Şəhər adı daxil edin`);
  let minimumAge = +prompt(`Minimum yaş daxil edin`);
  let avgPoints = +prompt(`Ortalama bal daxil edin`);

  return { city, minimumAge, avgPoints };
}

let filters = getInputs();

function findStudents(students, filters) {
  return (filteredStudents = students.filter(
    (s) =>
      s.age >= filters.minimumAge &&
      s.city === filters.city &&
      s.avgPoints >= filters.avgPoints,
  ));
}

const results = findStudents(students, filters);

console.log(results);
