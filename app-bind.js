// call - runs instantly, arguments - list of items
// apply - runs instantly, arguments - array of items
// bind - assign

const john = {
  name: "john",
  age: 24,
};

const susan = {
  name: "susan",
  age: 21,
};

//john.greet();
//this will fail
//susan.greet();

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I am ${this.age} years old and I live in ${city}, ${country}`
  );
}

//greet();
// const secondGreet = john.greet;
// secondGreet();

// greet.call(john, "san diego", "US");
// greet.call(susan, "san diego", "US");
// greet.call({ name: "peter", age: 30 }, "san diego", "US");

// greet.apply(john, ["san diego", "US"]);
// greet.apply(susan, ["san diego", "US"]);
// greet.apply({ name: "peter", age: 30 }, ["san diego", "US"]);

//assign, call it later

const susanGreet = greet.bind(susan, "toronto", "canada");

susanGreet();
