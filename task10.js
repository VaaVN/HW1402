document.addEventListener("DOMContentLoaded", () => {
  let range = document.querySelector("[data-js='t10-range']");
  let out = document.querySelector("[data-js='t10-out']");
  let box = document.querySelector("[data-js='t10-box']");
  let size = 0;
  function changedValue() {
    out.textContent = `${size}px`;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
  }
  range.addEventListener("input", (s) => {
    size = s.target.value;
    changedValue();
  });
});
