//string includes
const products = [
  {
    title: "high-back bench",
    company: "IKEA",
  },
  {
    title: "albany table",
    company: "marcos",
  },
  {
    title: "accent chair",
    company: "caressa",
  },
  {
    title: "wooden table",
    company: "IKEA",
  },
];

const firstName = "john";

const result = firstName.includes("jo");
const result1 = firstName.includes("JO");
const result2 = firstName.includes("j", 1);
const product = {
  title: "Leather Chair",
  company: "IKEA",
};

const result3 = product.title.includes("le");
const text = "ab";

const filteredProduct = products.filter((product) => {
  return product.title.toLowerCase().includes(text);
});

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(filteredProduct);
