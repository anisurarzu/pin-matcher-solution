// generate pin
function getPin() {
  const takePin = Math.round(Math.random() * 10000);
  const pin = takePin + "";
  if (pin.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
document.getElementById("pin-button").addEventListener("click", () => {
  const newPin = getPin();
  document.getElementById("display-pin").value = newPin;
});

document.getElementById("key-pad").addEventListener("click", (e) => {
  const number = e.target.innerText;
  const presentNumber = document.getElementById("display-number");
  if (isNaN(number)) {
    if (number == "C") {
      presentNumber.value = "";
    } else if (number == "Submit") {
      const displayPin = document.getElementById("display-pin");
      const displayNumber = document.getElementById("display-number");
      const pinMatch = document.getElementById("pin-match");
      const pinNotMatch = document.getElementById("not-match");
      if (displayPin.value == displayNumber.value) {
        pinNotMatch.style.display = "none";
        pinMatch.style.display = "block";
      } else {
        pinMatch.style.display = "none";
        pinNotMatch.style.display = "block";
      }
    }
  } else {
    const newNumber = presentNumber.value + number;
    presentNumber.value = newNumber;
  }
});
