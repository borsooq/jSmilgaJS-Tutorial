//Closure
function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }

  return showBalance;
}

newAccount("susan", 500)();

const john = new newAccount("john", 300);
const bob = new newAccount("bob", 1000);

john();
bob();
