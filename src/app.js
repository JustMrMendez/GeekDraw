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

for (const [suit, value] of Object.entries(cards)) {
  // cards;
}

const spadesIcon = `<svg viewBox="78.884 38.18 44.304 46.54" width="44.304" height="46.54"><pathd="M 102.571 72.91 C 103.167 73.644 103.837 74.314 104.571 74.91 C 111.261 80.458 121.449 76.719 122.961 68.16 C 123.294 66.604 123.26 64.991 122.861 63.45 C 122.041 60.45 119.301 57.45 116.361 54.66 C 114.951 53.34 113.601 52.1 112.281 50.86 C 108.281 47.17 103.911 42.77 101.041 38.18 C 98.161 42.77 93.751 47.18 89.801 50.86 L 85.711 54.66 C 82.781 57.44 80.041 60.46 79.211 63.45 C 78.812 64.991 78.778 66.604 79.111 68.16 C 80.623 76.719 90.811 80.458 97.501 74.91 C 98.271 74.231 98.966 73.47 99.571 72.64 C 97.521 77.42 94.661 80.7 90.571 82.22 L 90.571 84.72 L 111.421 84.72 L 111.421 82.22 C 107.421 80.73 104.561 77.54 102.521 72.91 L 102.571 72.91 Z"></pathd=></svg>`;

const heartIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><pathd="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`;

window.onload = function() {
  const deck = shuffle(cards);
  const card = deck[0];
  console.log(card);
  document.querySelector(".center").innerHTML = card.value;

  const topSuit = document.getElementById("icon");
  const botSuit = document.getElementById("icon2");
  console.log(topSuit.innerHTML);
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
    botSuit.style.fontSize = "5rem";
  } else if (card.suit == "diamonds") {
    topSuit.innerHTML = `♦️`;
    topSuit.style.fontSize = "5rem";
    botSuit.innerHTML = `♦️`;
    botSuit.style.fontSize = "5rem";
  } else {
    topSuit.innerHTML = `♣️`;
    topSuit.style.fontSize = "5rem";
    botSuit.innerHTML = `♣️`;
    botSuit.style.fontSize = "5rem";
  }
};
