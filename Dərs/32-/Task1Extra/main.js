let start = document.querySelector(".start-btn");
let counter = document.querySelector(".counter");

let tick = new Audio("tick.wav");
tick.volume = 0.1;

let hours = 0;
let minutes = 0;
let seconds = 0;
let days = 0;

let timerLoop;
let isCounting = false;

// Initialize Visual
counter.innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;

start.addEventListener("click", () => {
  if (!isCounting) {
    isCounting = true;
    start.innerText = "Stop Timer";
    hours = 0;
    minutes = 0;
    seconds = 0;
    days = 0;

    counter.innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    timerLoop = setInterval(() => {
      seconds++;
      tick.play();
      if (days > 0) {
        counter.innerText = `${days}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      } else if (hours > 0) {
        counter.innerText = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      } else {
        counter.innerText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
      }

      if (seconds == 60) {
        seconds = 0;
        minutes++;
      } else if (minutes == 60) {
        minutes = 0;
        hours++;
      } else if (hours == 24) {
        hours = 0;
        days++;
      }
    }, 1000);
  } else {
    isCounting = false;
    start.innerText = "Start Timer";
    clearInterval(timerLoop);
  }
});
