document.addEventListener("DOMContentLoaded", () => {
  let text = document.querySelector("[data-js='t9-text']");
  let but = document.querySelector("[data-js='t9-toggle']");
  let isHiden = true;
  function changedValue() {
    text.classList.toggle("isHiden", isHiden);
  }
  but.addEventListener("pointerdown", () => {
    isHiden = !isHiden;
    but.textContent = isHiden ? "Показать" : "Скрыть";
    changedValue();
  });
});
