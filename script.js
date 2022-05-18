"use strict";
//create an element - DOES NOT put it in the DOM, just creates it.
// adding several style rules
// !       Editing Attributes
// div.setAttribute('id', 'theDiv')
// if id exists, update it to 'theDiv', else create and id with value 'theDiv'
// div.getAttribute('id') - returns 'theDiv'
// div.removeAttribute('id') - removes specified attribute

// WORKING WITH CLASSES

// div.classList.add('new') - adds class 'new' to your new div
// div.classList.remove('new') - removes 'new' class from div
//div.classList.toggle('active')
// if div doesn't have class 'active' then add it, or if it does, then remove it.
// IT IS OFTEN STANDARD TO TOGGLE A CSS STYLE RATHER THAN ADDING AND REMOVING INLINE CSS.
// --- Adding text content.
// div.textContent = 'Hello World!'
// creates a text node containing 'Hello World!' and inserts it in div.
// --- Adding HTML content.
// div.innerHTML = '<span>Hello World!</span>'
//renders the html inside div.
// NOTE --- textContent IS PREFERABLE FOR ADDING TEXT, AND innerHTML should be used sparingly as it can create security risks if misused.
// const container = document.querySelector('#container');
// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = ' This is the glorious text-content!';
// container.appendChild(content);

//create a paragraph
// const p = document.createElement('p');
// add the content of the paragraph
// p.textContent = `Hey I'm red!`;
//set the style of the paragraph
// p.setAttribute('style', 'color: red;');
// attach/ append the paragraph to the 'container'.
// container.appendChild(p);

// const header = document.createElement('h3');
// header.textContent = `I'm a blue h3!`;
// header.setAttribute('style', 'color: blue');
// container.appendChild(header);

//

//select the container
const container = document.querySelector("#container");
container.setAttribute(
  "style",
  "margin-top: 200px;background-color: blue; margin-left: 200px; width: 300px; height: 300px;"
);
for (let i = 0; i < 195; i++) {
  //create div
  const div = document.createElement("div");
  //style div
  div.setAttribute(
    "style",
    "background-color: red; padding: 1px;margin: 1px; display: inline-block; width: 16px; height: 16px;"
  );
  container.appendChild(div);
}
const allDivs = document.querySelectorAll("div");
allDivs.forEach((div) => {
  div.addEventListener("mousemove", () => {
    div.setAttribute("style", "background-color:grey");
  });
});

// EVENTS
//method 1
// {/* <button onclick="alert('Hello World')">Click me</button>;  */} goes in HTML file
//method 2
// {/* <button id='btn'>Click me</button> */} goes in html file.
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("button event");
// const secondBtn = document.querySelector("#secondBtn");
// secondBtn.addEventListener("click", () => {
//   alert("Yeeeey, you clicked me.");
// });
// btn.addEventListener("click", function (e) {
//   console.log(e);
// });
// btn.addEventListener("click", function (e) {
//   console.log(e.target);
// });
// btn.addEventListener("click", function (e) {
//   e.target.style.background = "blue";
// });
// // attaching listeners to groups of nodes.
// //buttons is a node list. It looks and acts much like an array.
// const buttons = document.querySelectorAll("button");
// //we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   //and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });

// other useful events are click, dblclick, keydown, keyup
