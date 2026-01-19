let text = document.querySelector(".counter");
let button = document.querySelector(".click");

let clockIsTicking = document.querySelector(".bunny");
let video = document.querySelector(".video");

let explosion = new Audio("./asset/audio/loud-explosion.mp3");
let tick = new Audio("./asset/audio/tick.mp3");

button.addEventListener("click", () => {
  let counter = 1;
  button.disabled = true;
  button.style.cursor = "not-allowed";
  let bomb = setInterval(() => {
    text.innerText = counter;
    tick.play();

    if (counter == 8) {
      clockIsTicking.style.display = "block";
    }

    if (counter == 10) {
      clockIsTicking.style.display = "none";
      text.innerText = "BOOM!!!";
      document.body.style.backgroundImage =
        "url('https://c.tenor.com/wMHJk-5S334AAAAd/tenor.gif')";
      setTimeout(() => {
        document.body.style.backgroundImage = "none";
      }, 2000);
      clearInterval(bomb);
      button.disabled = false;
      explosion.play();
    }
    counter++;
  }, 1000);
});
