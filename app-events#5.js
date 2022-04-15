const btns = document.querySelectorAll(".btn");

btns.forEach(function (element) {
  element.addEventListener("click", function (e) {
    console.log("currentTarget", e.currentTarget);
    e.currentTarget.style.color = "green";
    console.log("target", e.target);
    //e.target.style.color = "green";
  });
});
