"use strict";
const boxContainer = document.querySelector("#box-container");
const div = document.createElement("div");
const button = document.querySelector("button");
div.setAttribute(
  "style",
  "background-color: red; display: grid; width: 16px; height: 16px;"
);
const createDiv = () => {
  let boxSize = prompt(
    "Please specify from 1 to 100, how big will be the box."
  );
  if (boxSize <= 100) {
    for (let i = 0; i < 256; i++) {
      div.setAttribute(
        "style",
        `background-color: red; display: grid; width: 16px; height: 16px; grid-template-columns: ${boxSize}; grid-template-rows: ${boxSize}`
      );
      boxContainer.appendChild(div);
    }
  }
};

button.addEventListener("click", createDiv);
