const john = {
  name: "john",
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`Hello, I'a ${this.name} and I am ${this.age} years old`);
  },
};

const susan = {
  name: "susan",
  age: 21,
};

john.greet();

//this will fail
//susan.greet();

function greet() {
  console.log(this);
  console.log(`Hello, I'a ${this.name} and I am ${this.age} years old`);
}

//greet();
// const secondGreet = john.greet;
// secondGreet();

greet.call(susan);
greet.call({ name: "peter", age: 30 });
john.greet.call(susan);
