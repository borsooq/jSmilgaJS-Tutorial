//string includes
const products = [
  "high-back bench",
  "albany table",
  "accent chair",
  "wooden table",
];

let randomItem = "wooden table";
let randomItem1 = "high-back bench";

const isIncluded = products.includes(randomItem);
const isIncluded1 = products.includes(randomItem1, 1);
console.log(isIncluded);
console.log(isIncluded1);

if (products.includes(randomItem)) {
  console.log(`Yeah, it is on the list`);
}
