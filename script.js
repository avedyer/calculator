let input = document.getElementById("input");
let output = document.getElementById("output");
let argument = 0;
let result = 0;
let operator = '';
let buttons = document.querySelectorAll("button");

let grabValue = () => {
    argument = parseInt(input.innerHTML);
    result = parseInt(output.innerHTML);

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
        case 'add':
            result += argument;
            break;

        case 'subtract':
            result -= argument;
            break;

        case 'multiply':
            result *= argument;
            break;
        case 'divide':
            result /= argument;
            break;
        case 'power':
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
}


for (const button of buttons) {
    let buttonValue = button.id;

    if (buttonValue === "add" 
    || buttonValue === "subtract" 
    || buttonValue === "multiply" 
    || buttonValue === "divide" 
    || buttonValue === "power") {
        button.onclick = () => {
            if (!output.innerHTML) {
                output.innerHTML = input.innerHTML;
                input.innerHTML = '';
            }
            operator = buttonValue;
        } 
    }

    else if (buttonValue === "negative") {
        button.onclick = () => {
            if (input.innerHTML.charAt(0) === '-'){
                input.innerHTML = input.innerHTML.substring(1);
            }
            else {
                input.innerHTML = "-" + input.innerHTML;
            }
        }
    }

    else if (buttonValue === "equals") {
        button.onclick = () => {
            compute();
        }
    }

    else if (buttonValue === "del") {
        button.onclick = () => {
            input.innerHTML = input.innerHTML.slice(0, -1);
        }
        
    }

    else if (buttonValue === "clear") {
        button.onclick = () => {
            input.innerHTML = '';
            output.innerHTML = '';
        }
    }
    
    else if (buttonValue === "decimal") {
        button.onclick = () => {
            if(input.innerHTML.length < 16 && !input.innerHTML.includes('.')) {
                if(input.innerHTML === "") {
                    input.innerHTML += "0";
                }
                input.innerHTML += ".";
            }
        }
    }

    else if (buttonValue === "zero") {
        button.onclick = () => {
            if (input.innerHTML !== "0") {
                input.innerHTML += "0";
            }
        }
    }
    else {
        button.onclick = () => {
            if(input.innerHTML.length < 16) {
                input.innerHTML += buttonValue;
            }
        }
    }
    
    
}