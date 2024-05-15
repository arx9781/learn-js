let result = document.getElementById("resultField");

document.getElementById("submit").onclick = () => {
  let userInput = document.getElementById("inputField").value;
  userInput = Number(userInput);

  if (userInput > 75) {
    result.textContent = "You got A grade. Congratulations!";
    result.style.color = "green";
  } else if (userInput < 75 && userInput > 50) {
    result.textContent = "You got B grade. Almost There!";
    result.style.color = "yellow";
  } else if (userInput < 50 && userInput > 35) {
    result.textContent = "You got C grade. Try Harder Next Time";
    result.style.color = "orange";
  } else if (userInput < 35 && userInput > 0) {
    result.textContent = "You got F. You Failed";
    result.style.color = "red";
  } else {
    result.textContent = "Invalid Marks Entered!";
    result.style.color = "red";
  }
};
