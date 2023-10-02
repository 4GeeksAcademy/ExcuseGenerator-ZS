/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excusegenerator();
};

let excusegenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let quien = getRandomInt(0, who.length);
  let accion = getRandomInt(0, action.length);
  let que = getRandomInt(0, what.length);
  let cuando = getRandomInt(0, when.length);

  let frase =
    who[quien] + " " + action[accion] + " " + what[que] + " " + when[cuando];
  return frase;
};
