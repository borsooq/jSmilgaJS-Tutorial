//Asynchronous execution

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const container = document.querySelector(".img-container");
//const url = "https://source.unsplash.com/random";
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  const result = await displayColor();
  console.log(result);
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`there is no such element ${element}`));
    }
  });
}

//async return a Promise!
async function displayColor() {
  try {
    const first = await addColor(1000, heading1, "red");
    await addColor(1000, heading2, "blue");
    await addColor(1000, heading3, "green");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
  return "hello";
}
