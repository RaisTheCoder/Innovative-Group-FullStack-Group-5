let text = document.querySelector(".announce");
let container = document.querySelector("#container");

let test = document.querySelector("#test");

let recordDisplay = document.querySelector("#timeTaken");
let record = +localStorage.getItem("timeTaken");

(() => {
  if (!record) {
    recordDisplay.innerText = `Your Fastest Record: Not Started Yet`;
  } else {
    recordDisplay.innerText = `Your Fastest Record: ${record}ms`;
  }
})();

let button = document.querySelector("#start");

let isRedScreen = false;
let gameRunning = false;

let timeTaken = 0;

button.addEventListener("click", () => {
  if (gameRunning) return;
  gameRunning = true;

  recordDisplay.style.visibility = "hidden";
  container.style.backgroundColor = "rgb(72, 134, 215)";
  container.style.cursor = "pointer";
  container.style.color = "white";
  text.innerText = "Wait for the red color";

  // Dots
  button.disabled = true;
  button.style.background = "none";
  button.style.border = "none";
  button.innerHTML =
    '<i style="color: gray" class="fa-solid fa-circle c"></i>' +
    '<i style="color: gray" class="fa-solid fa-circle c"></i>' +
    '<i style="color: gray" class="fa-solid fa-circle c"></i>';
  let circles = button.querySelectorAll(".c");
  let circleIndex = 0;

  let loading = setInterval(() => {
    circles.forEach((circle) => (circle.style.color = "gray"));
    circles[circleIndex].style.color = "white";
    circleIndex = (circleIndex + 1) % circles.length;
  }, 350);

  // Red Screen <3
  let redTime = Date.now();
  let randomTime = (Math.floor(Math.random() * 10) + 1) * 1000;
  let reactWhen = setTimeout(() => {
    isRedScreen = true;
    container.style.backgroundColor = "rgb(206, 71, 71)";
    text.innerText = "Click now!";
    redTime = Date.now();
  }, randomTime);

  setTimeout(() => {
    container.addEventListener(
      "click",
      () => {
        if (isRedScreen) {
          isRedScreen = false;
          let clickTime = Date.now();
          timeTaken = clickTime - redTime;
          container.style.backgroundColor = "rgb(89, 214, 89)";
          text.innerHTML =
            '<i class="fa-solid fa-clock"></i> ' + `Took you ${timeTaken}ms`;

          let oldRecord = +localStorage.getItem("timeTaken");

          // Initializing the record key in localStorage for the first time, otherwise it won't work. lol.
          if (!oldRecord || oldRecord == null) {
            localStorage.setItem("timeTaken", timeTaken);
            recordDisplay.innerText = `Your Fastest Record: ${localStorage.getItem("timeTaken")}ms`;
          } else {
            // If found.. we'll check if the value we got is lesser than the initial/old value and decide the fastest one.
            // (Least is the fastest)
            if (timeTaken < +localStorage.getItem("timeTaken")) {
              localStorage.setItem("timeTaken", timeTaken);
              recordDisplay.innerText = `Your Fastest Record: ${localStorage.getItem(
                "timeTaken",
              )}ms (${oldRecord}ms before!)\nYou were ${oldRecord - timeTaken}ms faster this try!`;
            } else {
              recordDisplay.innerText = `Your Fastest Record: ${localStorage.getItem("timeTaken")}ms`;
            }
          }
        } else {
          recordDisplay.innerText = `Your Fastest Record: ${localStorage.getItem("timeTaken")}ms`;
          container.style.backgroundColor = "rgb(206, 71, 71)";
          text.innerText = "Too early!";
        }
        container.style.cursor = "default";
        recordDisplay.style.visibility = "visible";
        button.innerText = "Try Again";
        button.disabled = false;
        button.style.backgroundColor = "azure";
        button.style.border = "1px solid black";
        // This needed to be here because
        // you could easily click as fast as you can to exploit the new record
        // You can just edit key values in the localStorage anyway.
        clearTimeout(reactWhen); // Have to clean timeouts up, because it would still work even if you clicked early.
        clearInterval(loading);
        gameRunning = false;
      },
      { once: true }, // Most useful thing ever!
    );
  }, 1);
});
