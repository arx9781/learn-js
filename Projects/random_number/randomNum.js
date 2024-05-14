//generates a random number between 1 & 6
let DICE = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

//generating between 2 specified numbers
const MIN = 90;
const MAX = 100;

let minmax = Math.floor(Math.random() * (MAX - MIN)) + MIN;
console.log(minmax);

//project
let result;
document.getElementById("topLeft").onclick = function () {
  const topLeftSquare = document.getElementById("topLeftSquare");
  let maximum = 9;
  let minimum = 0;
  result = Math.floor(Math.random() * (maximum - minimum));
  topLeftSquare.textContent = result;
};

document.getElementById("topCenter").onclick = function () {
  const topCenterSquare = document.getElementById("topCenterSquare");
  let maximum = 50;
  let minimum = 1;
  result = Math.floor(Math.random() * (maximum - minimum)) + minimum;
  topCenterSquare.textContent = result;
};

document.getElementById("topRight").onclick = function () {
  const topRightSquare = document.getElementById("topRightSquare");
  let maximum = 100;
  let minimum = 50;
  result = Math.floor(Math.random() * (maximum - minimum) + minimum);
  topRightSquare.textContent = result;
};
