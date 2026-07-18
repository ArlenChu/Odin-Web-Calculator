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

let oprand1 = -1;
let oprand2 = -1;
let operator = "undefined";

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

const display = document.querySelector("#display")
let displaystring = ""

const btnClear = document.querySelector("#clear")
btnClear.onclick = () => {
    oprand1 = -1;
    oprand2 = -1;
    operator = "undefined";
    displaystring = ""
    display.textContent = displaystring
}

const btn9 = document.querySelector("#9")
btn9.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 9
        displaystring += '9'
    } else if (oprand2 == -1) {
        oprand2 = 9
        displaystring += '9'
    }
    display.textContent = displaystring
}

const btn8 = document.querySelector("#8")
btn8.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 8
        displaystring += '8'
    } else if (oprand2 == -1) {
        oprand2 = 8
        displaystring += '8'
    }
    display.textContent = displaystring
}

const btn7 = document.querySelector("#7")
btn7.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 7
        displaystring += '7'
    } else if (oprand2 == -1) {
        oprand2 = 7
        displaystring += '7'
    }
    display.textContent = displaystring
}

const btn6 = document.querySelector("#6")
btn6.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 6
        displaystring += '6'
    } else if (oprand2 == -1) {
        oprand2 = 6
        displaystring += '6'
    }
    display.textContent = displaystring
}

const btn5 = document.querySelector("#5")
btn5.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 5
        displaystring += '5'
    } else if (oprand2 == -1) {
        oprand2 = 5
        displaystring += '5'
    }
    display.textContent = displaystring
}

const btn4 = document.querySelector("#4")
btn4.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 4
        displaystring += '4'
    } else if (oprand2 == -1) {
        oprand2 = 4
        displaystring += '4'
    }
    display.textContent = displaystring
}

const btn3 = document.querySelector("#3")
btn3.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 3
        displaystring += '3'
    } else if (oprand2 == -1) {
        oprand2 = 3
        displaystring += '3'
    }
    display.textContent = displaystring
}

const btn2 = document.querySelector("#2")
btn2.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 2
        displaystring += '2'
    } else if (oprand2 == -1) {
        oprand2 = 2
        displaystring += '2'
    }
    display.textContent = displaystring
}

const btn1 = document.querySelector("#1")
btn1.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 1
        displaystring += '1'
    } else if (oprand2 == -1) {
        oprand2 = 1
        displaystring += '1'
    }
    display.textContent = displaystring
}

const btn0 = document.querySelector("#0")
btn0.onclick = () => {
    if (oprand1 == -1) {
        oprand1 = 0
        displaystring += '0'
    } else if (oprand2 == -1) {
        oprand2 = 0
        displaystring += '0'
    }
    display.textContent = displaystring
}

