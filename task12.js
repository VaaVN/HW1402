document.addEventListener("DOMContentLoaded", () => {
  let plus = document.querySelector("[data-js='t12-plus']");
  let out = document.querySelector("[data-js='t12-label']");
  let bar = document.querySelector("[data-js='t12-bar']");
  let percent = 0;
  let sound = new Audio("./0124.WAV");
  function playSound(soun) {
    soun.currentTime = 0;
    soun.play();
  }
  function changedValue() {
    out.textContent = `${percent}%`;
    bar.style.width = `${percent}%`;
    if (percent > 100) {
      playSound(sound);
      setTimeout(() => {
        percent = 0;
        out.textContent = `${percent}%`;
        bar.style.width = `${percent}%`;
      }, 600);
    }
  }

  plus.addEventListener("pointerdown", () => {
    percent += 10;
    changedValue();
  });
});
