//map

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "boss" },
];

const ages = people.map(function (item) {
  console.log(item);
  return item.age + 20;
});
console.log(ages);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

console.log(names);

document.body.innerHTML = names.join("");
