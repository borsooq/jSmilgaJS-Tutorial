const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomVar = "random value";

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${randomVar}</li>
      <li>list item</li>`;

document.body.appendChild(ul);

div.textContent = "hello world";
div.innerHTML = "hello people";