"use strict";
/*

document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 11;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

*/

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // ! When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    //! When player wins
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Correct number!";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".guess").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "20rem";
    score--;
    document.querySelector(".score").textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //! When guess is too high
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      //score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    //! When guess is too low
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      //score = score - 1;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".number").style.width = "10rem";

  document.querySelector(".guess").style.backgroundColor = "#333";
});
