// variable initializations
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let displayText = "";

/* 
  updateDisplay: updates the text content of an element acting as our display 
                  with a passed string.
  Parameters: Element display, Strind displayText
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