//filter

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "boss" },
  { name: "anna", age: 35, position: "boss" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

console.log(youngPeople);

const developers = people.filter(function (person) {
  return person.position === "developer";
});

const seniorDevelopers = people.filter(function (person) {
  return person.position === "senior developer";
});

console.log(developers);
console.log(seniorDevelopers);
