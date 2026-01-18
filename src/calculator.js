export class Calculator {
  constructor() {
    this.display = '';
    this.previousValue = null;
    this.operator = null;
    this.waitingForNewValue = false;
  }

  // Update the display
  updateDisplay(value) {
    const displayElement = document.querySelector('.result');
    if (displayElement) {
      displayElement.value = value || '0';
    }
  }

  // Handle number input
  inputNumber(number) {
    if (this.waitingForNewValue) {
      this.display = number;
      this.waitingForNewValue = false;
    } else {
      this.display = this.display === '' || this.display === '0' ? number : this.display + number;
    }
    this.updateDisplay(this.display);
  }

  // Handle operator input
  inputOperator(nextOperator) {
    const inputValue = parseFloat(this.display);

    if (isNaN(inputValue)) {
      // If display is empty or invalid, use 0
      this.previousValue = 0;
    } else if (this.previousValue === null) {
      this.previousValue = inputValue;
    } else if (this.operator) {
      const currentValue = this.previousValue || 0;
      const newValue = this.calculate(currentValue, inputValue, this.operator);

      this.display = String(newValue);
      this.updateDisplay(this.display);
      this.previousValue = newValue;
    }

    this.waitingForNewValue = true;
    this.operator = nextOperator;
  }

  // Perform calculation
  calculate(firstValue, secondValue, operator) {
    if (operator === '+') {
      return firstValue + secondValue;
    } else if (operator === '-') {
      return firstValue - secondValue;
    } else if (operator === '*') {
      return firstValue * secondValue;
    } else if (operator === '/') {
      if (secondValue === 0) {
        alert('Error: Division by zero');
        return firstValue;
      }
      return firstValue / secondValue;
    }
    return secondValue;
  }

  // Handle equals button
  calculateResult() {
    const inputValue = parseFloat(this.display);

    if (isNaN(inputValue)) {
      return; // Don't calculate if display is invalid
    }

    if (this.previousValue !== null && this.operator) {
      const newValue = this.calculate(this.previousValue, inputValue, this.operator);
      this.display = String(newValue);
      this.updateDisplay(this.display);
      this.previousValue = null;
      this.operator = null;
      this.waitingForNewValue = true;
    }
  }

  // Clear calculator
  clear() {
    this.display = '';
    this.previousValue = null;
    this.operator = null;
    this.waitingForNewValue = false;
    this.updateDisplay('0');
  }

  // Reset display to 0
  reset() {
    this.clear();
  }
}
