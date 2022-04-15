const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColors() {
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
  console.log("hello");
}

btn.addEventListener("click", changeColors);
