//Rest operator

//arrays
const fruits = ["apple", "orange", "banana", "lemon"];
const [first, second, ...rest] = fruits;
console.log(first, rest);

//objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...restPerson } = person;
//fails
//const { ...restPerson, job } = person;
console.log(job, restPerson);

const testScores = [78, 90, 56, 43, 99, 65];

const getAverage = (name, ...averageScores) => {
  console.log(name);
  console.log(averageScores);
  let total = 0;
  for (const score of averageScores) {
    total += score;
  }

  console.log(`${name} score is ${total / averageScores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...testScores);
