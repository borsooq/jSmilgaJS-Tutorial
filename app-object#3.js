//console.log(this);

function showThis() {
  console.log(this);
}

const john = {
  name: "john",
  showThis: showThis,
};

const bobo = {
  name: "bob",
  showThis: showThis,
};

john.showThis();
bobo.showThis();

showThis();

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", showThis);
btn2.addEventListener("click", showThis);
btn2.addEventListener("click", function () {
  showThis();
});
