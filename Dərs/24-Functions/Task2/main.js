let number1 = +prompt(`Birinci ədədi daxil edin.`);
let number2 = +prompt(`İkinci ədədi daxil edin.`);
let operator = prompt(
  `1 / +) ${number1} + ${number2}\n2 / -) ${number1} - ${number2}\n3 / *) ${number1} * ${number2}\n4 / /) ${number1} / ${number2}`,
);

function calculate(num1, num2) {
  if (operator == "1" || operator == "+") {
    return num1 + num2;
  } else if (operator == "2" || operator == "-") {
    return num1 - num2;
  } else if (operator == "3" || operator == "*") {
    return num1 * num2;
  } else if (operator == "4" || operator == "/") {
    if (num2 == 0) {
      // NESTED CONDITION SPOTTED
      return "0'a bölmək is a big no-no. :P";
    } else {
      return num1 / num2;
    }
  } else {
    return "Operator keçərli deyil.";
  }
}

if (!alert(`Nəticə/Cavab\n${calculate(number1, number2)}`)) {
  location.reload();
}
