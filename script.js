"use strict";

//add a button
const button = document.createElement("button");

// add class to the button
button.classList.add("button");

button.textContent = "Change the size";
//style the button
button.setAttribute(
  "style",
  "width: 20px, height: 20px, background-color: grey; border: 2px solid black; border-radius: 2%; margin-top: 0; position:absolute; top: 15px;"
);
document.body.appendChild(button);

//the button sends the user a pop up asking for the number of squares - max input should be 100
const changeSize = function (size) {
  size = prompt("Chose a size between 1 - 100");
  if (size <= 100) {
    for (let i = 0; i < size; i++) {
      //create divs
      const div = document.createElement("div");
      //style the divs
      div.setAttribute(
        "style",
        "background-color: red; margin: 1px; display: inline-block; width: 16px; height: 16px;"
      );
      //add the divs to the container.
      container.appendChild(div);

      //change the color when mouse over divs.
      const changeColor = () => {
        div.style.backgroundColor = "grey";
      };
      div.addEventListener("mouseover", changeColor);
    }
  }
};
button.addEventListener("click", changeSize);
//once entered, the existing grid should be removed and a new grid should be generated in the same total space as before.
//create the container
const container = document.querySelector("#container");
// style the container.
container.setAttribute(
  "style",
  "margin-top: 200px; margin-left: 200px; width: 195px; height: 220px;"
);
