//reduce

const people = [
  { name: "bob", age: 20, position: "developer", id: 1, salary: 200 },
  { name: "peter", age: 25, position: "designer", id: 2, salary: 300 },
  { name: "susy", age: 30, position: "boss", id: 3, salary: 500 },
  { name: "anna", age: 35, position: "boss", id: 4, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
  return (acc += currItem.salary);
}, 0);

console.log(total);
