const display = document.getElementById("display");

function Display(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let result = "";
  try {
    result = eval(display.value);
  } catch (error) {
    result = "ERROR";
  }
  
  if (result === "ERROR") {
    display.value = "ERROR";
  } else {
    display.value = result;
  }
}
