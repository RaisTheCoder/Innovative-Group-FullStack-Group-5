let _name = prompt(`Ad daxil edin`);
let prevPoints = +prompt(`Əvvəlki balı daxil edin (Maks 50)`);
let currentPoints = +prompt(`İndiki balı daxil edin (Maks 50)`);

function showResults(name, prev, current) {
  let combined = prev + current;

  name = name[0].toLocaleUpperCase() + name.slice(1);

  if (combined >= 91 && combined <= 100) {
    if (!alert(`A\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  } else if (combined >= 81 && combined < 91) {
    if (!alert(`B\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  } else if (combined >= 71 && combined < 81) {
    if (!alert(`C\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  } else if (combined >= 61 && combined < 71) {
    if (alert(`D\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  } else if (combined >= 51 && combined < 61) {
    if (!alert(`E\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  } else if (combined >= 0 && combined < 51) {
    if (!alert(`Kəsildiniz.\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  } else if (combined < 0 || combined > 100) {
    if (!alert(`Nəticə keçərli deyil.\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  } else if (prev > 50 || current > 50) {
    if (!alert(`Ədəd 0-50 arası olmalıdır.\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  } else {
    if (!alert(`Ədəd daxil edin.\n${name}, Bal: ${combined}`)) {
      location.reload();
    }
  }
}

showResults(_name, prevPoints, currentPoints);
