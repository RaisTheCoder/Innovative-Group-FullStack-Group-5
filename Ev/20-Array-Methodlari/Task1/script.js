let isActive = true;
const students = ["Rais", "Hannah", "UwU", "Vladimir"];

while (isActive) {
  let choice = prompt(
    "1) Tələbə əlavə et\n2) Tələbə sil\n3) Tələbələrə bax\n4) Çıxış",
  );

  if (choice === "1") {
    // Add a student
    let studentToAdd = prompt("Tələbə adını girin:");

    if (studentToAdd && studentToAdd.trim() !== "") {
      students.push(studentToAdd);
      alert("Tələbə " + studentToAdd + " uğurla əlavə edildi.");
    } else {
      console.log("Boş ad daxil edildi - E2");
    }
  } else if (choice === "2") {
    // Remove a student :3
    let studentToRemove = prompt("Silinəcək tələbə adını girin:");

    if (studentToRemove && studentToRemove.trim() !== "") {
      let index = students.indexOf(studentToRemove);

      if (index !== -1 && index <! 0) {
        students.splice(index, 1);
        alert("Tələbə " + studentToRemove + " uğurla silindi.");
      } else {
        alert("Belə tələbə tapılmadı.");
      }
    } else {
      console.log("Boş ad daxil edildi - E2");
    }
  } else if (choice === "3") {
    // List all students
    alert("Tələbələr:\n" + students.join(", "));
    console.log(students);
  } else if (choice === "4") {
    isActive = false;
    alert("Proqram dayandırıldı.");
  } else {
    alert("Yanlış seçim!");
  }
}
