const counter = document.querySelector(".counterp");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");
const input = document.querySelector(".input");
const sanaydi = document.querySelector(".sanaydi");
if (plus) {
  plus.addEventListener("click", () => {
    console.log("plus ishladi");
  });
}
if (reset) {
  reset.addEventListener("click", () => {
    console.log("reset ishladi");
  });
}
if (minus) {
  minus.addEventListener("click", () => {
    console.log("minus ishladi");
  });
}
if (input && sanaydi) {
  input.addEventListener("input", function () {
    sanaydi.textContent = input.value.length;
  });
}

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

console.log("nima");
