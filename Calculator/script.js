const displayElement = document.getElementById("display");

let operatorClicked = false; // Flag to track if an operator was clicked

function appendToDisplay(value) {
    if (operatorClicked && isOperator(value)) {
        // If an operator was clicked, replace the previous one
        displayElement.value = displayElement.value.slice(0, -1) + value;
    } else {
        displayElement.value += value;
        operatorClicked = isOperator(value);
    }
}

function clearDisplay() {
    displayElement.value = "";
    operatorClicked = false;
}

function deleteLastChar() {
    const currentValue = displayElement.value;
    if (isOperator(currentValue.slice(-1))) {
        operatorClicked = false;
    }
    displayElement.value = currentValue.slice(0, -1);
}

function calculateResult() {
    try {
        displayElement.value = eval(displayElement.value);
        if (displayElement.value === undefined || isNaN(displayElement.value)) {
            displayElement.value = "Error";
        }
    } catch (error) {
        displayElement.value = "Error";
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}
