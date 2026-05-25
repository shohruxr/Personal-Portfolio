const counter = document.querySelector(".counterp");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");

let son = 0;
minus.style.opacity = 0.3;
minus.disabled = true;
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

// counter.value === 0;
// minus.innerHTML = "<style>.minus:disabled{opacity:0; display: flex;padding: 6px;border-radius: 8px;background: #4a00e0;border: 1px solid #4a00e0;box-shadow: 0px 1px 2px 0px #0000000d;font-family: "Plus Jakarta Sans", sans-serif;font-weight: 600;font-size: 14px;line-height: 14px;letter-spacing: 0.7px;text-align: center;color: #ffffff;transition: 0.3s;}</style>";
