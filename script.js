const numberButtons = document.querySelector('.num');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');
const display = document.getElementById('display');

equalsButton.addEventListener('click', operate);
clearButton.addEventListener('click', clearScreen);

numberButtons.forEach((button) => 
    button.addEventListener('click', () => displayNumbers(button.textContent))      
)

const add = function(a, b) {
    return (a + b);
}

const subtract = function(a, b) {
    return (a - b);
}

const multiply = function(a, b) {
    return (a * b);
}

const divide = function(a, b) {
    return (a / b);
}

const operate = function(operator, a, b) {
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

const displayNumbers = function(number) {
    if (display.textContent === '0') {
        clearScreen();
    }
    display.textContent += number;
}

const clearScreen = function() {
    // should clear the display
}


