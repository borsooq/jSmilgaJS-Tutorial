function sayHello() {
  console.log("Hello john");
}

setTimeout(sayHello, 1000);

//alternative approach. ES6 arrow function

setTimeout(function () {
  console.log("hello john");
}, 2000);

//pass argumnets

function showScore(name, score) {
  console.log(`hello ${name}, your score is ${score}`);
}

//setTimeout(showScore, 1500, "john", 34);

const firstId = setTimeout(showScore, 1750, "john", 34);
const secondId = setTimeout(showScore, 1750, "peter", 55);
console.log(firstId);
console.log(secondId);

clearTimeout(firstId);
