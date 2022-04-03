const person1 = {
  name: "kamil",
  age: 20,
  status: "resident",
};

const person2 = {
  name: "mamil",
  age: 50,
  status: "tourist",
};

if (person1.age >= 18 && person1.status === "resident") {
  console.log("you can cast a vote");
} else {
  console.log("you're not elegible");
}

const dice = 1;

switch (dice) {
  case 1:
    console.log(`the value is ${dice}`);
    break;
  case 2:
    console.log(`the value is ${dice}`);
    break;
  case 3:
    console.log(`the value is ${dice}`);
    break;
  case 4:
    console.log(`the value is ${dice}`);
    break;
  case 5:
    console.log(`the value is ${dice}`);
    break;
  default:
    console.log(`the value is ${dice}`);
    break;
}
