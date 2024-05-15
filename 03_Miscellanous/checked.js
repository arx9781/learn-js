const rizzBtn = document.getElementById("rizzBtn");
const sigma = document.getElementById("sigma");
const fanumTax = document.getElementById("fanumTax");
const skibidi = document.getElementById("skibidi");
const alpha = document.getElementById("alpha");
const result = document.getElementById("resultField");

document.getElementById("submit").onclick = () => {
  if (rizzBtn.checked) {
    if (sigma.checked) {
      result.textContent = "Erm What The Sigma? 🤓";
      result.style.color = "gray";
    } else if (fanumTax.checked) {
      result.textContent = "kai cenat 🐒";
      result.style.color = "brown";
    } else if (skibidi.checked) {
      result.textContent = "bop bop skibidi bop bop yes yes 🚽";
      result.style.color = "green";
    } else {
      result.textContent = "can you hear the silence 🗿";
      result.style.color = "cyan";
    }
  } else {
    result.textContent = "L Rizz + No Bitches -tive Gyatt";
    result.style.color = "red";
  }
};
