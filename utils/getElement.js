function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw Error("you did not select any element");
}

export default getElement;
