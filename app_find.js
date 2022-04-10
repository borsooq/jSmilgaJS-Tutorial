//find

const people = [
  { name: "bob", age: 20, position: "developer", id: 1 },
  { name: "peter", age: 25, position: "designer", id: 2 },
  { name: "susy", age: 30, position: "boss", id: 3 },
  { name: "anna", age: 35, position: "boss", id: 4 },
];

const names = ["bob", "peter", "susy"];

const boss = people.find(function (person) {
  return person.position === "boss";
});
console.log(
  names.find(function (name) {
    return name === "bob";
  })
);

console.log(boss);

const person = people.find(function (person) {
  return person.id === 2;
});

console.log(person.name);

const person1 = people.filter(function (person) {
  return person.id === 2;
});

console.log(person1[0].name);
