let input = document.getElementById("input");
let output = document.getElementById("output");
let operatorDisplay = document.getElementById("operator");
let argument = 0;
let result = 0;
let operator = '';
let buttons = document.querySelectorAll("button");

input.innerHTML = '';
output.innerHTML = '';

let grabValue = () => {
    argument = parseFloat(input.innerHTML);
    result = parseFloat(output.innerHTML);

    if (!argument) {
        argument = 0;
    }

    if (!result) {
        result === 0;
    }
}

let compute = function() {
    grabValue();

    if (!operator) {
        if (!input.innerHTML) {
            return;
        }
        output.innerHTML = input.innerHTML;
        input.innerHTML = '';
        return;
    }

    if (!argument) {
        return;
    }

    switch (operator) {
        case '+':
            result += argument;
            break;

        case '-':
            result -= argument;
            break;

        case 'x':
            result *= argument;
            break;
        case '/':
            result /= argument;
            break;
        case '^':
            result **= argument;
            break;
    }

    input.innerHTML = '';
    if (!result) {
        output.innerHTML = "Undefined";
    }
    else {
        output.innerHTML = result.toString();
    }

    argument = 0;
    operator = '';
    operatorDisplay.innerHTML = '';
}

let addZero = function() {
    if (input.innerHTML !== "0") {
        input.innerHTML += "0";
    }
}

let addNum = function(num) {
    if(input.innerHTML.length < 16) {
        input.innerHTML += num;
    }
}

let addDecimal = function() {
    if(input.innerHTML.length < 16 && !input.innerHTML.includes('.')) {
        if(input.innerHTML === "") {
            input.innerHTML += "0";
        }
        input.innerHTML += ".";
    }
}

let del = function() {
    input.innerHTML = input.innerHTML.slice(0, -1);
}

let negative = function() {
    if (input.innerHTML.charAt(0) === '-'){
        input.innerHTML = input.innerHTML.substring(1);
    }
    else {
        input.innerHTML = "-" + input.innerHTML;
    }
}

let changeOperator = function(choice) {
    if (!output.innerHTML) {
        output.innerHTML = input.innerHTML;
        input.innerHTML = '';
    }
    operator = choice;
    operatorDisplay.innerHTML = operator;
}

for (const button of buttons) {
    let buttonValue = button.id;

    if (buttonValue === "+" 
    || buttonValue === "-" 
    || buttonValue === "x" 
    || buttonValue === "/" 
    || buttonValue === "^") {
        button.onclick = () => {
            changeOperator(buttonValue);
        } 
    }

    else if (buttonValue === "negative") {
        button.onclick = () => {negative()}
    }

    else if (buttonValue === "equals") {
        button.onclick = () => {compute()}
    }

    else if (buttonValue === "del") {
        button.onclick = () => {del()}
        
    }

    else if (buttonValue === "clear") {
        button.onclick = () => {
            input.innerHTML = '';
            output.innerHTML = '';
            operatorDisplay.innerHTML = '';
        }
    }
    
    else if (buttonValue === "decimal") {
        button.onclick = () => {addDecimal()}
    }

    else if (buttonValue === "zero") {
        button.onclick = () => {addZero()}
    }

    else {
        button.onclick = () => {addNum(buttonValue)}
    }
}


document.addEventListener('keydown', function(event) {
    console.log(event.key);

    if (event.key === '0') {
        addZero();
    }

    else if(parseFloat(event.key)) {
        addNum(event.key);
    }

    else if(event.key === '.') {
        addDecimal();
    }

    else if (event.key === '=') {
        compute();
    }

    else if (event.key === '+'
           || event.key === '-'
           || event.key === 'x'
           || event.key === '/'
           || event.key === '^'
        ) {
            changeOperator(event.key);
    }

    else if (event.key === 'Enter') {
        compute();
    }

    else if (event.key === 'Backspace') {
        del();
    }
})