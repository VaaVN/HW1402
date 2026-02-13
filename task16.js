document.addEventListener("DOMContentLoaded", () => {
  let but = document.querySelector("[data-js='t16-animate']");
  let box = document.querySelector("[data-js='t16-box']");
  let isAnim = false;
  but.addEventListener("pointerdown", (e) => {
    box.classList.toggle("animator", false);
    setTimeout(() => {
      box.classList.toggle("animator", true);
    }, 0);
  });
});
