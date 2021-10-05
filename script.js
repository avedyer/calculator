let input = document.getElementById("input");
let output = document.getElementById("output");
let argument;
let result;
let operator;
let buttons = document.querySelectorAll("button");

console.log(input, output);

let grabValue = () => {
    argument = parseInt(input.textContent);
    result = parseInt(output.textContent);
}

let updateScreen = function() {
    input.innerHTML = argument;
    output.innerHTML = result;
}

let compute = function() {
    grabValue;

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

    argument = undefined;

    updateScreen;
}


for (const button of buttons) {
    let buttonValue = button.id;

    if (buttonValue === "add" 
    || buttonValue === "subtract" 
    || buttonValue === "multiply" 
    || buttonValue === "divide" 
    || buttonValue === "power") {
        button.onclick = () => {
            operator = buttonValue;
            updateScreen;
        } 
    }

    else if (buttonValue ==="equals") {
        button.onclick = compute;
        updateScreen;
    }

    else if (buttonValue === "del") {
        button.onclick = () => {
            argument = parseInt(String(argument.slice(0, -1)));
            updateScreen;
        }
        
    }

    else if (buttonValue === "clear") {
        button.onclick = () => {
            argument = undefined;
            result = undefined;
            updateScreen;
        }
    }
    
    else if (buttonValue === "decimal") {
        button.onclick = () => {
            if(input.innerHTML.length < 16 && !input.innerHTML.includes('.')) {
                input.innerHTML += ".";
            }
        }
    }

    else if (buttonValue === "zero") {
        button.onclick = () => {
            if (input.innerHTML.length != 0) {
                input.innerHTML += "0";
            } 
        }
    }

    else {
        button.onclick = () => {
            console.log(input.innerHTML);
            if(input.innerHTML.length < 16) {
                input.innerHTML += buttonValue;
            }
        }
    }
    
    
}