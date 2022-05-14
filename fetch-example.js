const btn = document.querySelector(".btn");

const url = "http://127.0.0.1:5500/api/people.json";

btn.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayItems(data))
    .catch((error) => console.log(error));
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      return `<p>${item.name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((response) => {
//     //response object
//     //useful prop and methods
//     //convert response into JSON data
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
