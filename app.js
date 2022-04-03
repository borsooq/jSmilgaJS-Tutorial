const car = {
  make: "ford",
  model: "focus",
  year: 2005,
  hybrid: true,
  colors: ["blue", "black"],
  drive() {
    console.log("brum");
  },

  stop() {
    console.log("aaaa");
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
