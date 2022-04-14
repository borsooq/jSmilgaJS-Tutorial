const result = document.querySelector("#result");

//create empty elemnt

const bodyDiv = document.createElement("div");

//create text node

const text = document.createTextNode("a simple body div");
const heading1 = document.querySelector(".red");

bodyDiv.appendChild(text);

const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading");

heading.appendChild(headingText);

document.body.insertBefore(bodyDiv, result);

heading.classList.add("blue");

result.insertBefore(heading, heading1);

const smallHeading = document.createElement("h6");
const smallText = document.createTextNode(`i am small heading text`);
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);

document.body.replaceChild(smallHeading, bodyDiv);

console.log(result.children);
