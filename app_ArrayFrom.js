//Array.from and Array.of - NOT ON THE PROPTOTYPE

const example = ["one", "two", "three", "four"];

console.log(example);
console.log(example.map);
console.log(example.from);
console.log(example.of);

const friends = Array.of("john", 2, true);
console.log(friends);

const udemy = "udemy";
console.log(Array.from(udemy));

function countTotal() {
  let total = Array.from(arguments).reduce((acc, curr) => (acc += curr), 0);
  console.log(total);
}

countTotal(67, 89, 54);

const p = document.querySelectorAll("p");
const result = document.getElementById("result");
const second = document.getElementById("second");

let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");
console.log(newText);

result.innerHTML = newText;

const text = Array.from(document.querySelectorAll("p"), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(" ");

console.log(text);

second.innerHTML = text;
