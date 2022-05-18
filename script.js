"use strict";
//create the container
const container = document.querySelector("#container");
// style the container.
container.setAttribute(
  "style",
  "margin-top: 200px;background-color: blue; margin-left: 200px; width: 300px; height: 300px;"
);

for (let i = 0; i < 195; i++) {
  //create divs
  const div = document.createElement("div");
  //style the divs
  div.setAttribute(
    "style",
    "background-color: red; padding: 1px;margin: 1px; display: inline-block; width: 16px; height: 16px;"
  );
  //add the divs to the container.
  container.appendChild(div);

  //change the color when mouse over divs.
  const changeColor = () => {
    div.style.backgroundColor = "grey";
  };
  div.addEventListener("mouseover", changeColor);
}
//create button
//add functions to the button.
