// variable initializations
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayText = "0";

//  obtain initial display element
let display = document.querySelector("#display");

// add functionality to number buttons
let numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    addNumToDisplay(display, e.currentTarget);
  })
})

/* 
  addNumToDisplay: adds number to current display based on passed
                   number button.
  Parameters: Element display, Element numBtn
  Return value: N/A 
*/
function addNumToDisplay(display, numBtn) {

  // take into account if input is 0
  if(numBtn.textContent === "0") {
    if (displayText !== "0") {
      displayText = displayText.concat(numBtn.textContent);
      updateDisplay(display, displayText);
    }
  } else {
    // Take into account initial value of "0"
    if (displayText === "0") {
      displayText = numBtn.textContent;
      updateDisplay(display, displayText);
    } else {
      displayText = displayText.concat(numBtn.textContent);
      updateDisplay(display, displayText);
    }
  }
}

/* 
  updateDisplay: updates the text content of an element acting as our display 
                  with a passed string.
  Parameters: Element display, String displayText
  Return value: N/A 
*/

function updateDisplay(display, displayText) {
  display.textContent = displayText;
}

/*
  operate: takes two numbers and a string representing a math operation
           and returns the corresponding resulting number.
           Note: utilizes same operator string as used in button displays.
  Parameters: Number num1, Number num2, String operator
  Return value: Number
*/

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "×":
      return multiply(num1, num2);
      break;
    case "÷":
      return divide(num1, num2);
      break;      
  }
}

// basic math functions

function add(int1, int2) {
  return (int1 + int2);
}

function subtract(int1, int2) {
  return (int1 - int2);
}

function multiply(int1, int2) {
  return (int1 * int2);
}

function divide(int1, int2) {
  return (int1 / int2);
}