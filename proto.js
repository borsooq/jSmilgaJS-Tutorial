function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

Account.prototype.bank = "CHASE";
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Hello ${this.name} you balance is ${this.balance}`);
};
