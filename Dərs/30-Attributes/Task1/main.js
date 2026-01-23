const question = {
  question: "Which one roars?",
  correctAnswer: "lion",
};

const answers = document.querySelectorAll(".answer");

let image = document.getElementById("main");

const roar = new Audio("./asset/audio/roar.mp3");

let q = document.getElementById("question");

q.innerText = question.question;

answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    if (answer.value == question.correctAnswer) {
      image.setAttribute(
        "src",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F12%2F26%2F16%2F09%2Flion-3040797_1280.jpg&f=1&nofb=1&ipt=34b126af52974821a254ba0052fee38ae2c82ea6f9e18e028d3a1dca3643cfd6",
      );
      roar.play();
      q.innerText = "Rawr. Correct!";
    } else {
      q.innerText = "WHAR?!";
      setTimeout(() => {
        q.innerText = question.question;
      }, 500);
    }
  });
});
