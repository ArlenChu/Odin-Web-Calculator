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

let oprand1 = "";
let oprand2 = "";
let operator = "undefined";
let operatorPress = false;

function operate(oprand1, oprand2, operator) {
    if (operator == "+") {
        return add(oprand1, oprand2)
    } else if (operator == "-") {
        return subtract(oprand1, oprand2)
    } else if (operator == "*") {
        return multiply(oprand1, oprand2)
    } else if (operator == "/") {
        return divide(oprand1, oprand2)
    }
}

const display = document.querySelector("#display")
let displaystring = ""

const btnClear = document.querySelector("#clear")
btnClear.onclick = () => {
    oprand1 = "";
    oprand2 = "";
    operator = "undefined";
    displaystring = ""
    operatorPress = false;
    display.textContent = displaystring
}

const btn9 = document.querySelector("#btn9")
btn9.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '9'
        displaystring += '9'
    } else {
        oprand2 += '9'
        displaystring += '9'
    }
    display.textContent = displaystring
}

const btn8 = document.querySelector("#btn8")
btn8.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '8'
        displaystring += '8'
    } else {
        oprand2 += '8'
        displaystring += '8'
    }
    display.textContent = displaystring
}

const btn7 = document.querySelector("#btn7")
btn7.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '7'
        displaystring += '7'
    } else {
        oprand2 += '7'
        displaystring += '7'
    }
    display.textContent = displaystring
}

const btn6 = document.querySelector("#btn6")
btn6.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '6'
        displaystring += '6'
    } else {
        oprand2 += '6'
        displaystring += '6'
    }
    display.textContent = displaystring
}

const btn5 = document.querySelector("#btn5")
btn5.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '5'
        displaystring += '5'
    } else {
        oprand2 += '5'
        displaystring += '5'
    }
    display.textContent = displaystring
}

const btn4 = document.querySelector("#btn4")
btn4.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '4'
        displaystring += '4'
    } else {
        oprand2 += '4'
        displaystring += '4'
    }
    display.textContent = displaystring
}

const btn3 = document.querySelector("#btn3")
btn3.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '3'
        displaystring += '3'
    } else {
        oprand2 += '3'
        displaystring += '3'
    }
    display.textContent = displaystring
}

const btn2 = document.querySelector("#btn2")
btn2.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '2'
        displaystring += '2'
    } else {
        oprand2 += '2'
        displaystring += '2'
    }
    display.textContent = displaystring
}

const btn1 = document.querySelector("#btn1")
btn1.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '1'
        displaystring += '1'
    } else {
        oprand2 += '1'
        displaystring += '1'
    }
    display.textContent = displaystring
}

const btn0 = document.querySelector("#btn0")
btn0.onclick = () => {
    if (oprand1 == "") {
        oprand1 += '0'
        displaystring += '0'
    } else {
        oprand2 += '0'
        displaystring += '0'
    }
    display.textContent = displaystring
}

const btnplus = document.querySelector("#plus")
btnplus.onclick = () => {
    if (operator == "undefined") {
        if (operatorPress) {
            if (oprand2 != "") {
                oprand1 = operate(oprand1, oprand2, operator)
            }
        }
        operator = "+"
        operatorPress = true
        displaystring += '+'
    }
    display.textContent = displaystring
}

const btnsubtract = document.querySelector("#subtract")
btnsubtract.onclick = () => {
    if (operator  == "undefined") {
        if (operatorPress) {
            if (oprand2 != "") {
                oprand1 = operate(oprand1, oprand2, operator)
            }
        }
        operator = "-"
        operatorPress = true
        displaystring += '-'
    }
    display.textContent = displaystring
}

const btntimes = document.querySelector("#multiply")
btntimes.onclick = () => {
    if (operator  == "undefined") {
        if (operatorPress) {
            if (oprand2 != "") {
                oprand1 = operate(oprand1, oprand2, operator)
            }
        }
        operator = "*"
        operatorPress = true
        displaystring += 'x'
    }
    display.textContent = displaystring
}

const btndivide = document.querySelector("#divide")
btndivide.onclick = () => {
    if (operator  == "undefined") {
        if (operatorPress) {
            if (oprand2 != "") {
                oprand1 = operate(oprand1, oprand2, operator)
            }
        }
        operator = "/"
        displaystring += '÷'
    }
    display.textContent = displaystring
}

const btnequal = document.querySelector("#equal")
btnequal.onclick = () => {
    display.textContent = String(operate(oprand1, oprand2 , operator))
    oprand1 = "";
    oprand2 = "";
    operator = "undefined";
    displaystring = ""
    operatorPress = false;
}
