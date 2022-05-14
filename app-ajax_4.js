const btn = document.querySelector(".btn");

const url = "http://127.0.0.1:5500/api/people.json";

btn.addEventListener("click", async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayItems(data);
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
