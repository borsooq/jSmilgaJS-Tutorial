const age = 60;
let random = "random-value";
random = "age";

const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
  "random-value": "random",
};

console.log(person);
console.log(person.name);

const name = person.name;
console.log(name);

person.age = age;
person.city = "chicago";

//delete property
const siblings = delete person.siblings;

console.log(siblings);
console.log(person);
console.log(person.job.title);
console.log(person.job.company.name);
console.log(person.job.company.address);
console.log(person.work);
console.log(person["name"]);
console.log(person[random]);
