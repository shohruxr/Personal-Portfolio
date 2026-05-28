const counter = document.querySelector(".counterp");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");
const input = document.querySelector(".input");
const sanaydi = document.querySelector(".sanaydi");
let son = 0;
if (minus) {
  minus.style.opacity = 0.3;
  minus.disabled = true;
}

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
    minus.style.opacity = 0.3;
    minus.disabled = true;
  });
}
if (minus) {
  minus.addEventListener("click", () => {
    if (son >= 0) {
      son--;
      counter.textContent = son;
      minus.style.opacity = 0.3;
      minus.disabled = false;
    }
  });
}
if (input && sanaydi) {
  input.addEventListener("input", function () {
    sanaydi.textContent = input.value.length;
  });
}
