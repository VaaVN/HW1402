document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("[data-js='t2-input']");
  let count = document.querySelector("[data-js='t2-count']");
  let text = "";
  input.addEventListener("input", (a) => {
    text = a.target.value;
    count.textContent = `${text.length}`;
    console.log(text.length);
  });
});
