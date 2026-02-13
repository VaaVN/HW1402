document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("[data-js='t13-input']");
  let out = document.querySelector("[data-js='t13-out']");
  input.addEventListener("keydown", (e) => {
    console.log(e.ctrlKey, e.key);
    if (e.ctrlKey) {
      e.preventDefault();
      switch (e.key) {
        case "r":
          out.textContent = "Паровозик тыр тыр тыр";
          break;
        case "p":
          out.textContent = "a^2 + b^2 = c^2";
          break;
        case "s":
          out.textContent = `Площадь экрана: ${screen.height}px x ${screen.width}px=  ${screen.height * screen.width}px^2`;
          break;
        case "v":
          out.textContent = `https://vaavn.github.io/Portfolio/`;
          out.setAttribute("href", "https://vaavn.github.io/Portfolio/");
          break;
        default:
          out.textContent =
            "r - паравозик; p - Пифагор, s - Площадь, v - Валера";
          break;
      }
    }
  });
});
