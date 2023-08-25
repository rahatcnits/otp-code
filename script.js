const inputs = document.querySelectorAll("input"),
  button = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input,
      nextInput = input.nextElementSibling,
      prevInput = input.previousElementSibling;

    // if the has more than one character then clear it
    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    // if the next input is disabled and the current value is not emty
    // enable the next input and focus it
    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    // if the backspace key is pressed
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          currentInput.value = "";
          prevInput.focus();
        }
      });
    }

    // if input fill all index and no emty no disabled to button active
    if (!inputs[3].disabled && inputs[3].value !== "") {
      button.classList.add("active");
      return;
    }
    button.classList.remove("active");
  });
});

window.addEventListener("load", () => inputs[0].focus());
