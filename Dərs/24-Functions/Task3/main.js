let _name = prompt(`Adınızı daxil edin.`);
let surName = prompt(`SoyAdınızı daxil edin.`);
let salary = +prompt(`Maaşı daxil edin.`);
let interest = +prompt(`Faizi daxil edin.`);

function calcSalary(name, surName, salary, interest) {
  name = name[0].toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();
  surName =
    surName[0].toLocaleUpperCase() + surName.slice(1).toLocaleLowerCase();

  if (
    name == undefined ||
    surName == undefined ||
    salary == undefined ||
    interest == undefined
  ) {
    return `Daxil edilən dəyər keçərli deyil.`;
  }

  let interestDec = (salary * interest) / 100;
  let totalSalary = salary - interestDec;

  return `Ad-Soyad: ${name} ${surName}\nMaaş: ${salary}\nFaiz: ${interest}\nToplam Maaş: ${totalSalary}`;
}

if (!alert(calcSalary(_name, surName, salary, interest))) {
  location.reload();
}
