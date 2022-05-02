// Arrow functions
//reg functions: "this" reefers parent, left of the dot
//arrow function: refers to it's current surrounding scope
//First normal old-style function
//inside function - arrow functions
//default parameters, arrow function gotchas
sayHi();

const john = "john";
const peter = "peter";

function sayHi(person = "kamil") {
  console.log(`hi, ${person}`);
}

//error - before initialization
//sayHello();

const sayHello = (person = "bob") => console.log(`Hello ${person}`);

sayHello();
