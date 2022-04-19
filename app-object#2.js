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

john.fullName();
bob.fullName();
