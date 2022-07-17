'use strict';

class Calculator {
  constructor(prevOpText, currOpText) {
    this.prevOpText = prevOpText;
    this.currOpText = currOpText;
    this.clear();
  }

  clear() {
    this.prevOp = '';
    this.currOp = '';
    this.operation = undefined;
    this.updateDisplay();
  }

  del() {
    this.currOp = this.currOp.slice(0, -1);
    this.updateDisplay();
  }

  appendNum(number) {
    if (number === '.' && this.currOp.includes('.')) return;
    this.currOp = this.currOp.toString() + number.toString();
    this.updateDisplay();
  }

  chooseOp(operation) {
    
    // Do nothing if no number inputted
    if (this.currOp === '') return;

    // Compute value of prevOp given the operator
    if (this.prevOp !== '') {
      this.compute();
    }

    // If empty, set this.operation to the input and update displays
    this.operation = operation;
    this.prevOp = this.currOp;
    this.currOp = '';
    this.updateDisplay();
  }

  compute() {
    let computation;
    const prev = parseFloat(this.prevOp);
    const curr = parseFloat(this.currOp);

    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case '+':
        computation = prev + curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '/':
        computation = prev / curr;
        break;
      case '*':
        computation = prev * curr;
        break;
      default:
        return;
    }
    this.currOp = computation;
    this.prevOp = '';

    // Reset operation
    this.operation = undefined;
    this.updateDisplay();
  }

  // Splits the number in two (pre- and post- decimal)
  getDisplayNumber(number) {
    const stringNum = number.toString();
    const intNums = parseFloat(stringNum.split('.')[0]);
    const decimalNums = stringNum.split('.')[1];
    let intDisplay;
    if (isNaN(intNums)) intDisplay = '';
    else {
      intDisplay = intNums.toLocaleString('en', {
        maximumFractionDigits: 0
      })
    }
    console.log(decimalNums);
    if (decimalNums !== undefined) {
      return `${intDisplay}.${decimalNums}`
    }
    else {
      return intDisplay;
    }
    
  }

  updateDisplay() {
    this.currOpText.innerText = this.getDisplayNumber(this.currOp);
    if (this.operation !== undefined) {
      this.prevOpText.innerText = `${this.getDisplayNumber(this.prevOp)} ${this.operation}`;
    }
    else {
      this.prevOpText.innerText = '';
    }
  }
}


const numButtons = document.querySelectorAll('.js-num');
const opButtons = document.querySelectorAll('.js-operate');
const equalsButton = document.querySelector('.js-equals')
const clearButton = document.querySelector('.js-clear');
const delButton = document.querySelector('.js-del');
const prevOpText = document.querySelector('.js-prev');
const currOpText = document.querySelector('.js-curr');


const calculator = new Calculator(prevOpText, currOpText);

numButtons.forEach(button => button.addEventListener('click', () =>
  calculator.appendNum(button.innerText))
);

opButtons.forEach(button => button.addEventListener('click', () =>
  calculator.chooseOp(button.innerText))
);

clearButton.addEventListener('click', () => calculator.clear());
equalsButton.addEventListener('click', () => calculator.compute());
delButton.addEventListener('click', () => calculator.del());