import './style.css';
import { Calculator } from './calculator.js';

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const calculator = new Calculator();

  // Get all buttons
  const numberButtons = document.querySelectorAll('.num:not(.operators)');
  const operatorButtons = document.querySelectorAll('.operators');
  const equalsButton = document.querySelector('.calc');
  const clearButton = document.querySelector('.reset');
  const form = document.querySelector('#calculator');

  // Prevent form submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  // Add event listeners to number buttons
  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.value;
      // Only handle numeric values (0-9)
      if (!isNaN(value) && value !== '' && value !== '+' && value !== '-' && value !== '*' && value !== '/') {
        calculator.inputNumber(value);
      }
    });
  });

  // Add event listeners to operator buttons
  operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const operator = button.value;
      calculator.inputOperator(operator);
    });
  });

  // Add event listener to equals button
  if (equalsButton) {
    equalsButton.addEventListener('click', () => {
      calculator.calculateResult();
    });
  }

  // Add event listener to clear button
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      calculator.clear();
    });
  }

  // Initialize display
  calculator.updateDisplay('0');
});
