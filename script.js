//create an element - DOES NOT put it in the DOM, just creates it.
const container = document.createElement('div');
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

for (let i = 0; i < 16; i++) {
  const div = document.createElement('div');
}
