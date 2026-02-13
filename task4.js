document.addEventListener("DOMContentLoaded", () => {
  let minusBut = document.querySelector("[data-js='t4-minus']");
  let plusBut = document.querySelector("[data-js='t4-plus']");
  let resetBut = document.querySelector("[data-js='t4-reset']");
  let outField = document.querySelector("[data-js='t4-out']");
  let sound = new Audio("./67.mp3");
  function playSound(soun) {
    soun.currentTime = 0;
    soun.play();
  }
  function changedValue() {
    if (count == 67) {
      console.log("67!");
      playSound(sound);
    }
    outField.textContent = `${count}`;
  }
  let count = 0;
  minusBut.addEventListener("pointerdown", () => {
    count--;
    changedValue();
  });
  plusBut.addEventListener("pointerdown", () => {
    count++;
    changedValue();
  });
  resetBut.addEventListener("pointerdown", () => {
    count = 0;
    changedValue();
  });
});
