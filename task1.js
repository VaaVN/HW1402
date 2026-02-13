document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("[data-js='t1-btn']");
  let outField = document.querySelector("[data-js='t1-hex']");
  button.addEventListener("pointerdown", () => {
    let r = Math.floor(Math.random() * (255 + 1)),
      g = Math.floor(Math.random() * (255 + 1)),
      b = Math.floor(Math.random() * (255 + 1));
    let color = r.toString(16) + g.toString(16) + b.toString(16);
    outField.style.backgroundColor = `#${color}`;
    outField.textContent = `#${color}`;
  });
});
