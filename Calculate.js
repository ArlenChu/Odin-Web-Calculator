function add(oprand1, oprand2) {
    return oprand1 + oprand2;
}

function subtract(oprand1, oprand2) {
    return oprand1 - oprand2;
}

function multiply(oprand1, oprand2) {
    return oprand1 * oprand2;
}

function divide(oprand1, oprand2) {
    return oprand1 / oprand2;
}

let oprand1;
let oprand2;
let operator;

function operate(oprand1, oprand2, operator) {
    if (operator == "+") {
        return add(oprand1, oprand2)
    } else if (operator == "-") {
        return subtract(oprand1, oprand2)
    } else if (operator == "*") {
        return mulitply(oprand1, oprand2)
    } else if (operator == "/") {
        return divide(oprand1, oprand2)
    }
}