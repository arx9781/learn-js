const counter = document.getElementById("counter");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let count = 0;

decrease.onclick = function () {
  count--;
  counter.textContent = count;
};

reset.onclick = function () {
  count = 0;
  counter.textContent = count;
};

increase.onclick = function () {
  count++;
  counter.textContent = count;
};
