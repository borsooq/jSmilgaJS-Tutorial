class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
  }
  bank = "chase";
  deposit(amount) {
    this.balance += amount;
  }
}

const john = new Account("john", 0);
john.deposit(100);

console.log(john);

const bob = new Account("bob", 50);
bob.deposit(400);

console.log(bob);
