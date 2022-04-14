const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;

//console.log(classValue);

second.className = "colors";

second.classList.add("text");

third.classList.add("colors", "text");

first.classList.remove("colors");

let result = third.classList.contains("colors");

console.log(second.classList);
console.log(`third element contains class colors ${result}`);
