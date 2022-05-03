//for of - loops thorugh the values of an iterable object

const fruits = ["apple", "orange", "banana", "lemon"];
const longName = "John Smith Pepper III";
let shortName = "";

for (const letter of longName) {
  if (letter === " ") {
    continue;
  } else console.log(letter);
}

for (const fruit of fruits) {
  if (fruit === "banana") {
    //break;
    continue;
  }
  console.log(fruit);
}
