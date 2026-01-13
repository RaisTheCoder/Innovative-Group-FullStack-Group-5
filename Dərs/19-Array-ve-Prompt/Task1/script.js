let number = Number(prompt("Ədədin sadə vəya mürəkkəb olduğuna baxın"));

if (number < 0) {
    console.log("Doğru ədəd girin");
} else if (number % 2 === 0) {
    console.log("Ədəd mürəkkəbdir");
} else {
    console.log("Ədəd sadədir");
}