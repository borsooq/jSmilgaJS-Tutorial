//find
//findIndex
//every
//some

const people = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "anna" },
];

const grades = ["A", "B", "C", "A", "B"];
const goodGrades = ["A", "B", "A", "B"];

const anna = people.filter((person) => person.name === "anna");
console.log(anna);
console.log(anna[0].name);
console.log(anna[0].id);

//find
const peter = people.find((person) => person.name === "peter");
console.log(peter);
console.log(peter.name);
console.log(peter.id);

//findIndex
const person = people.findIndex((item) => item.id === 3);
console.log(person);

const newPeople = people.slice(0, person);
console.log(newPeople);

//every
//const allGoodGrades = grades.every((item) => item !== "C");
const allGoodGrades = goodGrades.every((item) => item !== "C");
console.log(allGoodGrades);

//some
//const someBadGrades = grades.some((item) => item === "C");
const someBadGrades = goodGrades.some((item) => item === "C");
console.log(someBadGrades);
