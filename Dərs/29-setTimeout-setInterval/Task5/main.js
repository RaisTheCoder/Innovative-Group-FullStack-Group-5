let progress = document.querySelector(".progress");
let percent = document.querySelector(".percentage");

let percentage = 0;

let load = setInterval(() => {
  let min = 10;
  let max = 40;
  percentage += Math.floor(Math.random() * (max - min + 1)) + min;

  progress.style.display = "flex";
  setTimeout(() => {
    percent.style.display = "block";
    progress.style.width = `${percentage}%`;
    percent.innerText = `${percentage}%`;
  }, 200);

  if (percentage >= 100) {
    percentage = 100;
    clearInterval(load);
    setTimeout(() => {
      percent.innerText = `✅ LOADED SUCCESSFULLY`;
    }, 200.1);
  }
}, 1000);
