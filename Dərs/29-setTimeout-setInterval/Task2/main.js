let ad = document.querySelector(".ad-screen");
let closeButton = document.querySelector(".close-button");
let btnTimer = 5;

let adInterval = setInterval(() => {
  ad.style.display = "flex";
  setTimeout(() => {
    ad.style.opacity = "100%";
    closeButton.innerText = btnTimer;

    let btnInter = setInterval(() => {
      closeButton.innerText = btnTimer;

      if (btnTimer == 0) {
        clearInterval(btnInter);
        closeButton.innerText = "X";
        closeButton.addEventListener("click", () => {
          ad.style.opacity = "0%";
          setTimeout(() => {
            ad.style.display = "none";
          }, 300);
        });
      }
      btnTimer--;
    }, 1000);
  }, 300);
}, 10000);
