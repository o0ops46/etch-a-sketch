"use strict";
const boxContainer = document.querySelector("#box-container");
const button = document.querySelector("button");

const createBox = (size) => {
  boxContainer.setAttribute(
    "style",
    `display: grid; background-color: white; grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size}, 1fr);`
  );
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    // div.textContent = `${Math.floor(i / size) + 1}: ${(i % size) + 1}`;
    div.setAttribute("style", "background-color: steelblue;");
    boxContainer.appendChild(div);
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = "purple";
    });
  }
};

// 1. Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
const getSize = () => {
  let size = prompt("Please enter the size between 2 - 100");
  resetGrid();
  if (size >= 2 && size <= 100) {
    createBox(size);
  } else alert("Error, please enter a number between 2 and 100");
};

//Once entered, the existing grid should be removed and a new grid should be generated
const resetGrid = () => {
  let element = document.querySelector("#box-container");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};
button.addEventListener("click", getSize);
