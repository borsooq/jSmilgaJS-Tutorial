//Closure

function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is : ${privateVar}`);
  }
  return inner;
  inner();
}

outer()();

const value = outer();
console.log(value);
value();
