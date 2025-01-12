// variable initializations
const ERROR_MESSAGE = "ERROR";
let firstNumber = 0;
// second number is undefined because we utilize this value to assess if second number has been input
let secondNumber = undefined;
let operator = "";
let displayText = "0";
let justCalculated = false; // keeps track if we have just calculated a value

//  obtain initial display element
let display = document.querySelector("#display");

// add functionality to number buttons
let numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach((button) => {
  // for decimal button
  if (button.id === "decimal-point") {
    button.addEventListener("click", (e) => {
      // check if we don't already have a decimal point
      if (!(Array.from(displayText).includes("."))) {
        addNumToDisplay(display, e.currentTarget);
      }
    })
  } else {
  // for every other button
    button.addEventListener("click", (e) => {
      addNumToDisplay(display, e.currentTarget);
    })
  }
})

// add functionality of "math" (binary operator) buttons
let mathBtns = document.querySelectorAll(".math-btn");
mathBtns.forEach((button) => {
  // for all binary operators
  if (button.id !== "calculate") {
    button.addEventListener("click", (e) => {
      // check another operator button has not been pressed before
      if (operator === "") {
        // store our first number if we have not just calculated a value
        firstNumber = justCalculated ? firstNumber : parseInt(displayText); 

        // store clicked operator
        operator = e.currentTarget.textContent;

        // clear display text but do not update
        displayText = "0";
      }
      else { //otherwise, just update the operator if second number has not been entered
        if (secondNumber===undefined && !(display.textContent === displayText)) {
        operator = e.currentTarget.textContent;
        }
      }
    })
  } else { // for "equals" button
    button.addEventListener("click", (e) => {

    // check if operator has been clicked
    if (operator !== "") { 
      // get second number from display
      secondNumber = parseInt(displayText);

      // calculate based on operator
      firstNumber = operate(firstNumber, secondNumber, operator);
      
      //take into account case where user divides by 0
      if (firstNumber === ERROR_MESSAGE) {
        updateDisplay(display, firstNumber);
        firstNumber = 0;
        secondNumber = undefined;
        operator = "";
        displayText = "0";
        justCalculated = false; 
      } else {

        // display results
        displayText = firstNumber.toString();
        updateDisplay(display, firstNumber);
  
        // update our global variables
        secondNumber = undefined;
        operator = "";
        displayText = "0";
        justCalculated = true; 
        }
      }
    })
  }
})

// add functionality of "action" buttons
let actionBtns = document.querySelectorAll(".action-btn");
actionBtns.forEach((button) => {

  // clear button
  if (button.id === "clear"){
    button.addEventListener("click",() => {
      // set all variables to inital state
      firstNumber - 0;
      secondNumber = undefined;
      operator = "";
      displayText = "0";
      justCalculated = false; 
      updateDisplay(display, displayText);
    })
  }

  // backspace button
  if (button.id === "backspace"){
    button.addEventListener("click",() => {
      backspaceDisplay(display);
    })
  } 

})

/* 
  addNumToDisplay: adds number to current display based on passed
                   number button.
  Parameters: Element display, Element numBtn
  Return value: N/A 
*/
function addNumToDisplay(display, numBtn) {

  //update "just calculated" value
  justCalculated = false;

  // take into account if input is 0
  if(numBtn.textContent === "0") {
    if (displayText !== "0") {
      displayText = displayText.concat(numBtn.textContent);
      updateDisplay(display, displayText);
    }
    else {
      // this case activates when an operator is pressed and then 0 is pressed
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
  backspaceDisplay: helper function for backspace button. Removes last number
                    pressed from current input on display and updates display.
  Parameters: Element display
  Return value: N/A 
*/

function backspaceDisplay(display) {
  // only do something if user has made any inputs
  if (displayText !== "0") {
    // check case where only one digit was input
    if (displayText.length === 1) {
      displayText = "0"
      updateDisplay(display, displayText);
    }
    else {
    // otherwise, remove last character
      displayText = displayText.substring(0,displayText.length - 1);
      updateDisplay(display, displayText);
    }
  }
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
      // take case of dividing by 0 into account
      if (num2 === 0){
        // return an error
        return ERROR_MESSAGE;
      }
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