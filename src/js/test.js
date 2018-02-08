// Create divs
let section = document.createElement('div');
section.classList.add('section');
section.classList.add('has-border');
section.classList.add('has-padding');

let iscoltwo = document.createElement('div');
iscoltwo.classList.add('is-col-two');
iscoltwo.classList.add('has-border');

// Add classes
let firstCol = document.createElement('div');
firstCol.classList.add('is-col-one');
firstCol.classList.add('has-border');

let secondCol = document.createElement('div');
secondCol.classList.add('is-col-one');
secondCol.classList.add('has-border');

// Append text
let textHello = document.createTextNode('Hello');
firstCol.appendChild(textHello);
let textWorld = document.createTextNode('World');
secondCol.appendChild(textWorld);

// Append to body
document.body.appendChild(section);
section.appendChild(iscoltwo);
iscoltwo.appendChild(firstCol);
iscoltwo.appendChild(secondCol);