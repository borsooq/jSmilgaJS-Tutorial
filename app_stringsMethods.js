//new string methods
//startsWith(), endsWith(), includes(), repeat()

const person = "Peter Smith";
const employee = "23456-EMP-PETER-SMITH";
const manager = "23456-MAN-JOHN-DOE";

//startsWith
console.log(person.startsWith("Pete"));
//case sensitive
console.log(person.startsWith("peter"));
console.log(employee.startsWith("EMP", 6)); //omit position

//endsWith
console.log(manager.endsWith("DOE"));
console.log(manager.endsWith("MAN", 9)); //check for given amount of letters

//includes
console.log(employee.includes("PETER"));

//repeat
const multiplyPeople = (person, amount) => person.repeat(amount);

console.log(multiplyPeople("pete", 10));
