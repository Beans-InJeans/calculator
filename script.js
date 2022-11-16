const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');

equalsButton.addEventListener('click', operate);
clearButton.addEventListener('click', clearDisplay);

numberButtons.forEach((button) => 
    button.addEventListener('click', () => displayNumbers(button.textContent))      
)

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            console.log("Not a valid operator.");
            break;
    };
}

function displayNumbers(number) {
    if (display.textContent === '0') {
        clearDisplay();
    }
    display.textContent += number;
}

function clearDisplay() {
    display.textContent = '';
}


