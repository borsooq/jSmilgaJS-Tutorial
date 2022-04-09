function fullName({ firstName, lastName }) {
  return (firstName + lastName).toUpperCase();
}

person = {
  lastName: "boruc",
  firstName: "kamil",
};

console.log(fullName(person));
