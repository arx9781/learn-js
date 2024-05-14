/*good practice to capitalise primitive data type constants like booleans and numbers. 
does not apply to reference data types such as strings and stuff*/

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function () {
  radius = document.getElementById("inputField").value;
  circumference = 2 * PI * Number(radius);
  document.getElementById(
    "answerField"
  ).textContent = `circumference: ${circumference}`;
};
