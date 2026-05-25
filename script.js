const counter = document.querySelector(".counterp");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");

minus.style.opacity = 0.3;
minus.disabled = true;
let son = 0;
plus.addEventListener("click", function () {
  son++;
  counter.textContent = son;
  minus.style.opacity = 1;
  minus.disabled = false;
});
minus.addEventListener("click", function () {
  if (son > 0) {
    son--;
    counter.textContent = son;
  } else {
    minus.style.opacity = 0.3;
    minus.disabled = false;
  }
});
reset.addEventListener("click", () => {
  son = 0;
  counter.textContent = son;
  minus.style.opacity = 0.3;
  minus.disabled = false;
});

const input = document.querySelector(".input");
const sanaydi = document.querySelector(".sanaydi");

input.addEventListener("input", () => {
  sanaydi.textContent = input.value.length;
});
