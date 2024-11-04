function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return (a / b).toFixed(2);
    }
    else {
        return "Haha no more 0s!!!";
    }
}

let a;
let b;
let count = 1;
let operator;
let newOperation = true;

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
}

document.addEventListener('click', (event) => {
    if (event.target.id === 'one') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("one");
        }
        else if (count === 2) {
            displaySecondNum('one');
        }
    }
    else if (event.target.id === 'two') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("two");
        }
        else if (count === 2) {
            displaySecondNum('two');
        }
    }
    else if (event.target.id === 'three') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("three");
        }
        else if (count === 2) {
            displaySecondNum('three');
        }
    }
    else if (event.target.id === 'four') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("four");
        }
        else if (count === 2) {
            displaySecondNum('four');
        }
    }
    else if (event.target.id === 'five') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("five");
        }
        else if (count === 2) {
            displaySecondNum('five');
        }
    }
    else if (event.target.id === 'six') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("six");
        }
        else if (count === 2) {
            displaySecondNum('six');
        }
    }
    else if (event.target.id === 'seven') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("seven");
        }
        else if (count === 2) {
            displaySecondNum('seven');
        }
    }
    else if (event.target.id === 'eight') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("eight");
        }
        else if (count === 2) {
            displaySecondNum('eight');
        }
    }
    else if (event.target.id === 'nine') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("nine");
        }
        else if (count === 2) {
            displaySecondNum('nine');
        }
    }
    else if (event.target.id === 'zero') {
        if (newOperation === false) {
            document.getElementById("display").textContent = '';
            newOperation = true;
        }
        if (count === 1) {
            displayFirstNum("zero");
        }
        else if (count === 2) {
            displaySecondNum('zero');
        }
    }
    else if (event.target.id === 'plus') {
        if (count === 1) {
            if (document.getElementById("display").textContent !== "") {
                displayOperator('plus');
                operator = '+';
                count++;
                newOperation = true;
            }
        }
    }
    else if (event.target.id === 'minus') {
        if (count === 1) {
            if (document.getElementById("display").textContent !== "") {
                displayOperator('minus');
                operator = '-';
                count++;
                newOperation = true;
            }
        }
    }
    else if (event.target.id === 'times') {
        if (count === 1) {
            if (document.getElementById("display").textContent !== "") {
                displayOperator('times');
                operator = 'x';
                count++;
                newOperation = true;
            }
        }
    }
    else if (event.target.id === 'divide') {
        if (count === 1) {
            if (document.getElementById("display").textContent !== "") {
                displayOperator('divide');
                operator = '÷';
                count++;
                newOperation = true;
            }
        }
    }
    else if (event.target.id === 'equal') {
        if (count === 2) {
            const operation = document.getElementById("display").textContent;
            const operatorIndex = operation.indexOf(operator);
            a = Number(operation.slice(0, operatorIndex));
            b = Number(operation.slice(operatorIndex + 1));
            document.getElementById("display").textContent = operate(a, b, operator);
            count = 1;
            newOperation = false;
        }
    }
    else if (event.target.id === 'clear') {
        document.getElementById("display").textContent = "";
        count = 1;
        newOperation = true;
    }
})

function displayFirstNum(num) {
    document.getElementById("display").textContent += document.getElementById(num).textContent;
}

function displayOperator(ope) {
    document.getElementById("display").textContent += document.getElementById(ope).textContent;
}

function displaySecondNum(num) {
    document.getElementById("display").textContent += document.getElementById(num).textContent;
}