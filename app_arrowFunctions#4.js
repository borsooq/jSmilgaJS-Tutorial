// Arrow functions
//reg functions: "this" reefers parent, left of the dot
//arrow function: refers to it's current surrounding scope
//First normal old-style function
//inside function - arrow functions
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this);
  setTimeout(() => {
    this.style.color = "black";
  }, 1000);
});
