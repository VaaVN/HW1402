document.addEventListener("DOMContentLoaded", () => {
  let aInput = document.querySelector("[data-js='t8-a']");
  let bInput = document.querySelector("[data-js='t8-b']");
  let addBut = document.querySelector("[data-js='t8-add']");
  let mulBut = document.querySelector("[data-js='t8-mul']");
  let out = document.querySelector("[data-js='t8-out']");
  let sound = new Audio("./67.mp3");
  function playSound(soun) {
    soun.currentTime = 0;
    soun.play();
  }
  function setInfo() {
    floatA = textA.length <= 0 ? 0 : parseFloat(textA);
    floatB = textB.length <= 0 ? 0 : parseFloat(textB);
    aInput.value = "";
    textA = "";
  }
  let textA = "",
    textB = "";
  let floatA = 0,
    floatB = 0;
  aInput.addEventListener("input", (a) => {
    textA = a.target.value;
  });
  bInput.addEventListener("input", (a) => {
    textB = a.target.value;
  });
  addBut.addEventListener("pointerdown", () => {
    setInfo();
    if (floatA + floatB == 67) {
      console.log("67!");
      playSound(sound);
    }
    out.textContent = `${floatA + floatB}`;
  });
  mulBut.addEventListener("pointerdown", () => {
    setInfo();
    if (floatA * floatB == 67) {
      console.log("67!");
      playSound(sound);
    }
    out.textContent = `${floatA * floatB}`;
  });
});
