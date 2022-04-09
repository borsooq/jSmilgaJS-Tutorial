function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.toUpperCase()}`;
}

function greet(name, cb) {
  const myName = "john";
  console.log(`${cb(name)} ${name}, my name is ${myName}`);
}

greet("bobo", morning);
greet("peter", morning);

greet("bobo", afternoon);
greet("peter", afternoon);

// function greetMorning(name) {
//   const myName = "john";
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name) {
//   const myName = "john";
//   console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
