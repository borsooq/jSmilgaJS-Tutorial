//var, let, const

//global scope
console.log(amount);
//let amount = 100;
var amount = 100;

function greet() {
  // local scope
  var random = "some random value";
  console.log(`hello there ${random} ${amount}`);
}

//console.log(`hello there ${random} ${amount}`);

//greet();

let total = 1000;
var test = true;

if (test) {
  //local scope
  let total = 500;
  let value = "some random value";
  console.log("hello there");
}
{
  let total = 111;
  console.log(total);
}
{
  let total = 222;
  console.log(total);
}
console.log(total);
//console.log(value);
