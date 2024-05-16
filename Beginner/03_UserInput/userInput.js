//easy way (not user friendly)

let username;
username = prompt("what is your username?");
console.log(username);

//chad way/ friendly way to do it
const submit = (document.getElementById("submitButton").onclick = function () {
  username = document.getElementById("inputField").value;
  const header = (document.getElementById(
    "header"
  ).textContent = `Hello ${username},`);
});
