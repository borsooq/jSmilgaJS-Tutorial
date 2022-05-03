//set
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

const finalResult = ["all", ...new Set(products.map((item) => item.company))];

console.log(finalResult);

// const companies = products.map((item) => item.company);

// console.log(companies);

// const uniqueCompanies = new Set(companies);

// console.log(uniqueCompanies);

// //custom item
// const finalCompanies = ["all", ...uniqueCompanies];

// console.log(finalCompanies);
