document.addEventListener("DOMContentLoaded", () => {
  let inputField = document.querySelector("[data-js='t3-input']");
  let but = document.querySelector("[data-js='t3-add']");
  let list = document.querySelector("[data-js='t3-list']");
  let error = document.querySelector("[data-js='t3-error']");
  let text = "";
  inputField.addEventListener("input", (a) => {
    text = a.target.value;
  });
  but.addEventListener("pointerdown", () => {
    if (text.length <= 0) {
      error.textContent = "Введёна пустая строка!";
    } else {
      error.textContent = "";
      let element = document.createElement("li");
      element.textContent = text;
      list.appendChild(element);
      inputField.value = "";
      text = "";
    }
    console.log(text.length);
  });
});
