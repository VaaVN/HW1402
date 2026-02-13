document.addEventListener("DOMContentLoaded", () => {
  let area = document.querySelector("[data-js='t15-area']");
  let item = document.querySelector("[data-js='t15-item']");
  let out = document.querySelector("[data-js='t15-coords']");
  let moving = false;
  item.addEventListener("pointerdown", (e) => {
    moving = true;
    item.textContent = "ПУСТИ";
    item.style.pointerEvents = "none";
  });
  item.addEventListener("pointerup", (e) => {
    moving = false;
    item.textContent = "ТАЩИ";
    item.style.pointerEvents = "auto";
  });
  document.addEventListener("pointerup", (e) => {
    moving = false;
    item.textContent = "ТАЩИ";
    item.style.pointerEvents = "auto";
  });
  area.addEventListener("pointermove", (e) => {
    if (moving) {
      console.log(e);
      let y = e.pageY - e.target.offsetTop - 22;
      let x = e.pageX - e.target.offsetLeft - 45;
      item.style.top = `${y}px`;
      item.style.left = `${x}px`;
      out.textContent = `x: ${x}, y: ${y}`;
    }
  });
  area.addEventListener("pointerexit", () => {
    moving = false;
    item.textContent = "ТАЩИ";
    item.style.pointerEvents = "auto";
  });
});
