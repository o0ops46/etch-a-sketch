"use strict";
const boxContainer = document.querySelector("#box-container");
const button = document.querySelector("button");

const createBox = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    boxContainer.setAttribute(
      "style",
      "display: grid; background-color: grey; grid-template-columns: repeat(16,1fr)"
    );

    div.setAttribute("style", "background-color: steelblue;");

    boxContainer.appendChild(div);
  }
};

button.addEventListener("click", createBox);
