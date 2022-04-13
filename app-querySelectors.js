const result = document.querySelector("#result");

result.style.backgroundColor = "blue";

const item = document.querySelector(".special");

const lastItem = document.querySelector("li:last-child");

const list = document.querySelectorAll(".special");

console.log(item);
console.log(lastItem);

list.forEach((element) => {
  element.style.color = "white";
});
