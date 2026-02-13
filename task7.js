document.addEventListener("DOMContentLoaded", () => {
  let inputField = document.querySelector("[data-js='t7-input']");
  let but = document.querySelector("[data-js='t7-run']");
  let out = document.querySelector("[data-js='t7-out']");
  let error = document.querySelector("[data-js='t7-error']");
  let text = "";
  function reverseString(string) {
    let array = string.split(" ");
    let resString = "";
    for (let i = array.length - 1; i >= 0; i--) {
      let letters = array[i].split("");
      letters = letters.reverse();
      let word = "";
      for (let j = 0; j < letters.length; j++) {
        word += letters[j];
      }
      resString += word + " ";
    }
    return resString;
  }
  inputField.addEventListener("input", (a) => {
    text = a.target.value;
  });
  but.addEventListener("pointerdown", () => {
    if (text.length <= 0) {
      error.textContent = "Введёна пустая строка!";
    } else {
      error.textContent = "";
      out.textContent = reverseString(text);
      inputField.value = "";
      text = "";
    }
  });
});
