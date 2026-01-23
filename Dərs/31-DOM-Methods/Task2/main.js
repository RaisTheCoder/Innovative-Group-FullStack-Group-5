let box = document.createElement("div");
box.style.height = "500px";
box.style.width = "500px";
box.style.position = "absolute";
box.style.transform = "translate(-50%, -50%)";

box.style.top = "50%";
box.style.left = "50%";
box.style.opacity = "0%";
box.style.transition = "1s ease";
box.style.display = "flex";
box.style.justifyContent = "center";
box.style.alignContent = "center";
box.style.backgroundColor = "red";
box.style.borderRadius = "7px";

document.body.append(box);

let h1 = document.createElement("h1");
h1.innerText = "Hello World!";
box.append(h1);

let button = document.createElement("button");
button.style.height = "30px";
button.style.width = "100px";
button.innerText = "Click me!";
button.style.cursor = "pointer";
button.style.position = "absolute";
button.style.transform = "translate(-50%, -50%)";
button.style.top = "52%";
button.style.left = "50%";

document.body.append(button);

button.addEventListener("click", () => {
  box.style.opacity = "100%";
});

button.addEventListener("dblclick", () => {
  button.remove();
  box.remove();
});
