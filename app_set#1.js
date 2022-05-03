//set

//mew Set
//add
//delete
//clear
//has(value)

const unique = new Set();

//add
unique.add("first");
unique.add("second");
unique.add("third");
unique.add("first");
unique.add(4);

//delete
//const result = unique.delete("third");
const result = unique.delete("five");

//has
const isValue = unique.has(4);

console.log(unique);
console.log(result);
console.log(isValue);
