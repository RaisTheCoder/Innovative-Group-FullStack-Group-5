document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let click = new Audio("./assets/audio/roblox-click-sound.mp3");
    click.volume = 0.5;
    click.play();
  }
});
