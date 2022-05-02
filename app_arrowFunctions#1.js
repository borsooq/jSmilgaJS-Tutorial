// Arrow functions

// function sayHi() {
//   console.log("hello");
// }

// sayHi();

// const hello = function (name) {
//   console.log(`Hello ${name}`);
// };
// hello("bob");

// function triple(value1, value2) {
//   return value1 * value2;
// }

const sayHi = () => console.log("hello");
sayHi();

const double = (value) => value * 2;
const number = double(4);
console.log(number);

// two parameters and more than one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  //more code here
  return result;
};

console.log(multiply(10, 20));

//return object
const object = () => ({ name: "john", age: 25 });
const person = object();
console.log(person);

//arrow functions as callback functions
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number, index) => {
  console.log(index);
  return number > 2;
});
console.log(big);

const btn = document.querySelector("button");
btn.addEventListener("click", () => console.log("you clicked me"));
