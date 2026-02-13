document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("[data-js='t11-seconds']");
  let out = document.querySelector("[data-js='t11-out']");
  let start = document.querySelector("[data-js='t11-start']");
  let stop = document.querySelector("[data-js='t11-stop']");
  let seconds = 0;
  let sound = new Audio("./1234.mp3");
  let timer;
  let subtimer = 0;
  function playSound(soun) {
    soun.currentTime = 0;
    soun.play();
  }

  input.addEventListener("input", (s) => {
    seconds = s.target.value;
  });
  start.addEventListener("pointerdown", () => {
    subtimer = seconds;
    timer = setInterval(() => {
      subtimer--;
      out.textContent = `${subtimer} с`;
      if (subtimer <= 0) {
        subtimer = 0;
        clearInterval(timer);
        out.textContent = "Время закончилось!";
        playSound(sound);
        input.value = "";
        seconds = 0;
      }
    }, 1000);
  });
  stop.addEventListener("pointerdown", () => {
    clearInterval(timer);
    second = subtimer;
    input.value = seconds;
  });
});
