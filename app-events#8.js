const form = document.getElementById("form");
const password = document.getElementById("password");
const name = document.getElementById("name");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
  console.log(name.value);
  console.log(password.value);
});
