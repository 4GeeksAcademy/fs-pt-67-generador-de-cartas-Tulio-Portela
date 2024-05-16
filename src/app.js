/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["♦", "♠", "♥", "♣"];

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  document.querySelector(".cardNumber").textContent = randomNumber;
  let cardTops = document.querySelectorAll(".cardTop, .cardBottom");
  cardTops.forEach(function(cardTop) {
    cardTop.textContent = randomSuit;
    if (randomSuit === "♦" || randomSuit === "♥") {
      cardTop.classList.add("red");
    }
  });
};
