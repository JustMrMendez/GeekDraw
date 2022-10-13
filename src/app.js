/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

import cards from "./cards.json";

for (const [suit, value] of Object.entries(cards)) {
  console.log(suit, value);
}

window.onload = function() {
  console.log(cards);
};
