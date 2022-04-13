const first = document.querySelector(".first");
const nextSibling = (first.nextSibling.nextSibling.style.color = "red");

console.log(first);
console.log(nextSibling);

const last = document.querySelector("#last");

console.log(last);

const third = last.previousSibling.previousSibling;

const third1 = last.previousSibling;
console.log(third);

third.style.color = "blue";

console.log(third1);

first.nextElementSibling.style.color = "purple";
