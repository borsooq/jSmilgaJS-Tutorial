window.addEventListener("load", function () {
  const img = document.querySelector("img");
  console.log("I will run second");
  console.log(img);
  console.log(img.width);
});

window.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector("img");
  console.log("I will run first");
  console.log(img);
  console.log(img.width);
});
