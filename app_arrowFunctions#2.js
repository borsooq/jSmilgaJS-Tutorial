// Arrow functions
//reg functions: "this" reefers parent, left of the dot
//arrow function: refers to it's current surrounding scope

const bob = {
  firstName: "bob",
  lastName: "smith",
  sayName: function () {
    const self = this;
    console.log(this);
    //console.log(self);
    // setTimeout(function () {
    //   console.log(this);
    //   console.log(`Hello my name is ${self.firstName} ${self.lastName}`);
    // }, 2000);
    setTimeout(() => {
      console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    }, 500);
  },
};

const anna = {
  firstName: "anna",
  lastName: "sanders",
  sayName: () => {
    console.log(this);
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

bob.sayName();
//anna.sayName();
