const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

btn.addEventListener("click", function () {
  console.log("you clicked me");
});

btn.addEventListener("mousedown", function () {
  console.log("mousedown");
});

btn.addEventListener("mouseup", function () {
  console.log("mouseup");
});

heading.addEventListener("mouseenter", function () {
  console.log("mouseenter");
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", function () {
  console.log("mouseleave");
  heading.classList.remove("blue");
});
