const first = document.querySelector(".first");
const cls = first.getAttribute("id");

const links = document.querySelectorAll(".first");
const link = document.getElementById("link");
const showLink = link.getAttribute("href");

const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "i also have a class fo first";

console.log(showLink);
console.log(links);
console.log(cls);
console.log(last);
