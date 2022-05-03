//Destructuring object

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const {
  first: first,
  last: lastName,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(first, lastName, city, zip, favoriteSibling);

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);
