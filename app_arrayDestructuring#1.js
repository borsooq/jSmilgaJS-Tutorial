//Destructuring

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];

console.log(orange, banana, lemon);

//by index, not the value
const [john, peter, bob, anna, kelly, susan] = friends;
const [enemy, , bobo, ann, kel, susie] = friends;

console.log(john, peter, bob, anna, kelly);
console.log(enemy, bobo, ann, kel);
