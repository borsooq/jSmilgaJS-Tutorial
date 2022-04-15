// window.addEventListener("load", function () {
//   const img = document.querySelector("img");
//   console.log("I will run second");
//   console.log(img);
//   console.log(img.width);
// });

// window.addEventListener("DOMContentLoaded", function () {
//   const img = document.querySelector("img");
//   console.log("I will run first");
//   console.log(img);
//   console.log(img.width);
// });

// window.addEventListener("scroll", function () {
//   console.log("hello");
//   console.log(window.scrollY + "px");
//   console.log(window.scrollX + "px");
// });

// console.log("height: " + window.innerHeight);
// console.log("width: " + window.innerWidth);

// const btn = document.querySelector(".btn");
// const box = document.querySelector(".box");

// btn.addEventListener("click", function () {
//   const values = box.getBoundingClientRect();
//   console.log(values);
// });

window.addEventListener("resize", function () {
  console.log(window.innerWidth);
});
