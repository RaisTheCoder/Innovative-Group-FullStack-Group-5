let sidebar = document.getElementById("sidebar");
let closeBtn = document.getElementById("side-close");
let navBtn = document.getElementById("nav-btn");

let body = document.body;
body.classList.toggle("no-scroll", false);

navBtn.addEventListener("click", () => {
  sidebar.style.left = "0%";
  body.classList.toggle("no-scroll", true);
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-100%";
  body.classList.toggle("no-scroll", false);
});

sidebar.addEventListener("click", () => {
  sidebar.style.left = "-100%";
  body.classList.toggle("no-scroll", false);
});
