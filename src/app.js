/* eslint-disable */
// import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import cards from "./cards.json";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}

window.onload = function() {
  const deck = shuffle(cards);
  console.log(deck);
  const card = deck[0];
  console.log(card);

  const value = document.querySelector(".center");
  value.innerHTML = card.value;
  const topSuit = document.getElementById("icon");
  const botSuit = document.getElementById("icon2");
  botSuit.style.rotate = "90";

  if (card.suit == "spades") {
    topSuit.innerHTML = `♠️`;
    topSuit.style.fontSize = "5rem";
    botSuit.innerHTML = `♠️`;
    botSuit.style.fontSize = "5rem";
  } else if (card.suit == "hearts") {
    topSuit.innerHTML = `♥️`;
    topSuit.style.fontSize = "5rem";
    botSuit.innerHTML = `♥️`;
    topSuit.style.color = "red";
    botSuit.style.color = "red";
    botSuit.style.fontSize = "5rem";
  } else if (card.suit == "diamonds") {
    topSuit.innerHTML = `♦️`;
    topSuit.style.fontSize = "5rem";
    botSuit.innerHTML = `♦️`;
    botSuit.style.fontSize = "5rem";
    topSuit.style.color = "red";
    botSuit.style.color = "red";
  } else {
    topSuit.innerHTML = `♣️`;
    topSuit.style.fontSize = "5rem";
    botSuit.innerHTML = `♣️`;
    botSuit.style.fontSize = "5rem";
  }
};
