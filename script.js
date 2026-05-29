const counter = document.querySelector(".counterp");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");
const input = document.querySelector(".input");
const sanaydi = document.querySelector(".sanaydi");

if (minus) {
  minus.style.opacity = 0.2;
  minus.disabled = true;
}
let son = 0;
if (plus) {
  plus.addEventListener("click", () => {
    son++;
    counter.textContent = son;
    minus.style.opacity = 1;
    minus.disabled = false;
  });
}
if (reset) {
  reset.addEventListener("click", () => {
    son = 0;
    counter.textContent = son;
    minus.style.opacity = 0.2;
    minus.disabled = true;
  });
}
if (minus) {
  minus.addEventListener("click", () => {
    if (son > 0) {
      son--;
      counter.textContent = son;
      if (son === 0) {
        minus.style.opacity = 0.2;
        minus.disabled = true;
      }
    }
  });
}
if (input && sanaydi) {
  input.addEventListener("input", function () {
    sanaydi.textContent = input.value.length;
  });
}
console.log("nima");
