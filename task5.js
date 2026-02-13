document.addEventListener("DOMContentLoaded", () => {
  let openBut = document.querySelector("[data-js='t5-open']");
  let closeBut = document.querySelector("[data-js='t5-close']");
  let modal = document.querySelector("[data-js='t5-modal']");
  let modalBack = document.querySelector("[data-js='t5-backdrop']");
  let isHiden = true;
  function changedValue() {
    modal.hidden = isHiden;
  }
  openBut.addEventListener("pointerdown", () => {
    isHiden = false;
    changedValue();
  });
  closeBut.addEventListener("pointerdown", () => {
    isHiden = true;
    changedValue();
  });
  modalBack.addEventListener("pointerdown", () => {
    isHiden = true;
    changedValue();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      isHiden = true;
      changedValue();
    }
  });
});
