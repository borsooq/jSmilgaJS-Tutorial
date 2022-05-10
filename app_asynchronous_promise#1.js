//Asynchronous execution

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const container = document.querySelector(".img-container");
const url = "https://source.unsplash.com/random";
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  loadImage(url)
    .then((data) => container.appendChild(data))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      console.log("Hey, everything works");
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("there was an error"));
    });
    img.src = url;
  });
}
