let names = ["john", "bobo", "barry", "olga", "ben"];

console.log(names.length);
console.log(names[4]);
console.log(names[names.length - 1]);

//concat
const lastNames = ["pepper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames.length);

//reverse
console.log(allNames.reverse());

//unshift
allNames.unshift("susy");
allNames.unshift("anna");
console.log(allNames);

//shift
allNames.shift();
console.log(allNames);

//push
allNames.push("kamil");
console.log(allNames);

//pop
allNames.pop();
console.log(allNames);

//slice
console.log(allNames.slice(0, 3));

//splice - mutates original array
const specificNames = allNames.splice(1, 2);
console.log(allNames);
console.log(specificNames);

//Arrays and for loop
const names1 = ["john", "bobo", "barry", "olga", "ben"];
const lastNames1 = "shakeandbake";

let newArray = [];

//for loop
for (let i = 0; i <= names1.length - 1; i++) {
  newArray.push(`${names1[i]} ${lastNames1}`);
}

console.log(newArray);

const gas = [20, 40, 100];
const food = [10, 40, 50];
function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  if (total > 100) {
    console.log("Whooaaa, your spending too much!");
  } else {
    console.log("Good");
  }

  return total;
}

console.log(`total is => ${calculateTotal(gas) + calculateTotal(food)}`);
