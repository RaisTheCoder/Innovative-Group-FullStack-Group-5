let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let inputs = document.querySelector(".settings");

let button = document.querySelector("#start-pause-stop");
let clock = document.querySelector("#timer");

let started = false;

let timerLoop;

seconds.addEventListener("input", () => {
  let sec = Number(seconds.value);
  let min = Number(minutes.value);

  if (sec >= 60) {
    min += Math.floor(sec / 60);
    sec = sec % 60;
  }

  if (sec < 0) {
    const borrow = Math.ceil(Math.abs(sec) / 60);
    min -= borrow;
    sec = 60 * borrow + sec;
    if (min < 0) {
      min = 0;
      sec = 0;
    }
  }

  minutes.value = min;
  seconds.value = sec;
});

button.addEventListener("click", () => {
  if (Number(seconds.value) >= 60) {
    let extraMinutes = Math.floor(seconds.value / 60);
    minutes.value = Number(minutes.value) + extraMinutes;
    seconds.value = Number(seconds.value) % 60;
  }

  if (started) {
    inputs.style.visibility = "visible";
    clock.innerText = "0:00";
    button.innerText = "START";
    started = false;
    minutes.disabled = false;
    seconds.disabled = false;
    clearInterval(timerLoop);
  } else {
    inputs.style.visibility = "hidden";
    button.innerText = "CLICK TO STOP";
    started = true;
    minutes.disabled = true;
    seconds.disabled = true;

    timerLoop = setInterval(() => {
      if (seconds.value == 0 && minutes.value == 0) {
        clearInterval(timerLoop);
        clock.innerText = "0:00";
        button.innerText = "START";
        started = false;
        minutes.disabled = false;
        seconds.disabled = false;
        return;
      }

      if (seconds.value == 0 && minutes.value > 0) {
        minutes.value--;
        seconds.value = 59;
      } else {
        seconds.value--;
      }

      clock.innerText = `${minutes.value}:${seconds.value.toString().padStart(2, "0")}`;
    }, 1000);
  }
});
