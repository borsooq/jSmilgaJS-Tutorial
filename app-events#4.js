const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");
const nameInput = document.getElementById("name");

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

// nameInput.addEventListener("keypress", function () {
//   console.log("you pressed a key");
// });

nameInput.addEventListener("keydown", function () {
  console.log("you pressed a key");
});

nameInput.addEventListener("keyup", function (event) {
  console.log(`you pressed a key ${event}`);
  console.dir(nameInput);
  console.log(nameInput.value);
});
