const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is => ${number}`);
console.log(`the second value is => ${number2}`);

let person = { name: "bob" };
let person1 = { ...person };
let person2 = person;
person2.name = "susy";
console.log(`the first person is => ${person.name}`);
console.log(`the first person1 is => ${person1.name}`);
console.log(`the second person is => ${person2.name}`);

//null && undefined
let number1 = 20 + null;
console.log(number1);
let number3 = 20 + undefined;
console.log(number3);

//truthy && falsy
const bool1 = true;
const bool2 = 2 > 1;
const text = "john";
const text1 = "";

if (bool1) {
  console.log("Hey, it works");
}

if (bool2) {
  console.log("Hey, it also works");
}

if (text) {
  console.log("hey, the value is truthy");
} else {
  console.log("hey, the value is falsy");
}

if (text1) {
  console.log("hey, the value is truthy");
} else {
  console.log("hey, the value is falsy");
}
