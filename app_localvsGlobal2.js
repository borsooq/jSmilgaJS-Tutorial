//LocalvsGlobal

let name = "bobo";

function calculate() {
  const name = "john";
  const age = 25;
  becomesGlobal = "global variable";
}

calculate();
console.log(becomesGlobal);

if (true) {
  const name = "john";
}

{
  const name = "john";
  const special = "special";
}

console.log(`my name is => ${name} nad I am awesome`);
