const john = {
  firstName: "john",
  lastName: "anderson",
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

const bob = {
  firstName: "bob",
  lastName: "sanders",
  fullName: function () {
    console.log(`My full name is ${this.firstName} ${this.lastName}`);
  },
};

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const jon = createPerson("john", "anderson");
const susy = createPerson("susy", "apple");
const bobby = createPerson("bob", "jordan");

jon.fullName();
susy.fullName();
bobby.fullName();
