document.addEventListener("DOMContentLoaded", () => {
  let aBut = document.querySelector("[data-tab='a']");
  let bBut = document.querySelector("[data-tab='b']");
  let cBut = document.querySelector("[data-tab='c']");
  let paneA = document.querySelector("[data-pane='a']");
  let paneB = document.querySelector("[data-pane='b']");
  let paneC = document.querySelector("[data-pane='c']");
  let aBool = true;
  let bBool = false;
  let cBool = false;
  function changedValue() {
    aBut.classList.toggle("is-active", aBool);
    paneA.classList.toggle("is-active", aBool);

    bBut.classList.toggle("is-active", bBool);
    paneB.classList.toggle("is-active", bBool);

    cBut.classList.toggle("is-active", cBool);
    paneC.classList.toggle("is-active", cBool);
  }
  aBut.addEventListener("pointerdown", () => {
    aBool = true;
    bBool = false;
    cBool = false;
    changedValue();
  });
  bBut.addEventListener("pointerdown", () => {
    aBool = false;
    bBool = true;
    cBool = false;
    changedValue();
  });
  cBut.addEventListener("pointerdown", () => {
    aBool = false;
    bBool = false;
    cBool = true;
    changedValue();
  });
});
