function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name} you balance is ${this.balance}`);
};

const bob = new Account("john", 0);
const john = new Account("john", 200);
console.log(Account.prototype);

console.log(john);
console.log(bob);
console.log({});
console.log([]);
