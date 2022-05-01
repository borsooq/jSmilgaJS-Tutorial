//Closure
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }
  function withdraw(amount) {
    if (amount > balance) {
      console.log(`sorry, ${name} not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }

  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const john = new newAccount("john", 300);
const bob = new newAccount("bob", 1000);

john.deposit(500);
john.withdraw(50);
john.withdraw(1500);

john.showBalance();
bob.showBalance();
