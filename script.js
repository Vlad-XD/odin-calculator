// variable initializations
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

/*
  operate: takes two numbers and a string representing a math operation
           and returns the corresponding resulting number.
           Note: utilizes same operator string as used in button displays.
  Parameters: number num1, number num2, string operator
  Return value: number
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