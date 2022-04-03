let fruits = ["apple", "pear", "avocado", 42];

const firstFruit = fruits[0];
fruits[-1] = firstFruit;

for (i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}
