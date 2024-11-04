// Select the DOM nodes for manipulation
const display = document.querySelector('#operationBox');
const historial = document.querySelector('#historialBox');
const buttons = document.querySelectorAll('button');

// Initialize control global variables
let clearScreen = true;    // Control when the screen should be cleared
let prevOperand = '';   // Store the last Operand or Operation result
let currentOperator = '';   // Store the last selected operator

// Function that reset the global variables
const clearInfo = () => {
    clearScreen = true;
    prevOperand = '';
    currentOperator = '';
}

// Function that validate if the text content of the display is a valid operand
const validateOperand = (string) => {
    return string != '' && typeof(+string) == 'number' && !isNaN(+string);
}

// Function that made the respective operation
const operate = (a, b, operator) => {
    let result = 0;
    historial.textContent = `${a} ${operator} ${b} =`;  //Update the historial of the last operation
    switch (operator) {
        case '+':
            result = +a + +b;
            break;
        case '-':
            result = +a - +b;
            break;
        case '*':
            result = +a * +b;
            break;
        case '/':
            if (+b == 0){
                clearInfo();
                return 'lmao';  // Can't divide by 0 lmao
            }
            result = +a / +b;
            break;
        default:
            clearInfo();
            return 'Syntaxis Error!';
    }
    if (result%1 != 0) {    // If the result isn't a Integer
        if (result.toString().split('.')[1].length > 4){    // If the result have more than 4 decimals they're fixed to 4
            result= result.toFixed(4);
        }
    }
    if (result.toString().length > 15) {    // If the final result has a length more than 15 it wouldn't fit the screen,
        clearInfo()                         // i could reduce the font-size but my lazy ass don't want to
        return 'too big lol';
    }
    return result;
}

// Function that write the numbers in the screen
const displayText = (number) => {
    if (!validateOperand(display.textContent) || clearScreen) { // Clear the screen if the current text content is "invalid" like a error masage 
        display.textContent = '';                               // or if the clear screen flag is true
        clearScreen = false;
    }
    if (display.textContent.length < 15) {  // More than 15 character doesn't fit the screen size
        display.textContent += number;
    }
}

//  Add a new operator
const addOperator = (newOperator) => {
    if (validateOperand(display.textContent)){  // If the current text content is a valid operand
        if (!prevOperand) {
            prevOperand = display.textContent;  // If there is no previous operand then the current text content is set as such
        } else {
            prevOperand = operate(prevOperand, display.textContent, currentOperator);   // If there is a previous operand then the result of the
            display.textContent = prevOperand;                                          // previous operation is set as the new previous operand
        }
        currentOperator = newOperator;  // Set the new operator
        clearScreen = true;             // "Turn on" the clearScrean flag to allow a new operand to be introduced
    }
}

//  Loop that set the event listener to every button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == 'addOp' ||
            button.id == 'subsOp' ||
            button.id == 'multOp' ||
            button.id == 'divOp'
        ) {     //  Add a shadow effect to the most recent operator button
            buttons.forEach(btn => btn.classList.remove('active-operator'));
            button.classList.add('active-operator');
        }
        
        switch (button.id) {
            case 'num0':
                displayText('0');
                break;
            case 'num1':
                displayText('1');
                break;
            case 'num2':
                displayText('2');
                break;
            case 'num3':
                displayText('3');
                break;
            case 'num4':
                displayText('4');
                break;
            case 'num5':
                displayText('5');
                break;
            case 'num6':
                displayText('6');
                break;
            case 'num7':
                displayText('7');
                break;
            case 'num8':
                displayText('8');
                break;
            case 'num9':
                displayText('9');
                break;
            case 'dot':
                if (!display.textContent.includes('.')){    // There can be only one 'dot' per operand
                    displayText('.');
                }
                break;
            case 'addOp':
                addOperator('+');
                break;
            case 'subsOp':
                addOperator('-');
                break;
            case 'multOp':
                addOperator('*');
                break;
            case 'divOp':
                addOperator('/');
                break;
            case 'clearBtn':    // Reset the global variables and the text content
                clearInfo();
                display.textContent = '0';
                historial.textContent = '=';
                buttons.forEach(btn => btn.classList.remove('active-operator'));
                break;
            case 'enterBtn':
                if (prevOperand && currentOperator && validateOperand(display.textContent)) {
                    display.textContent = operate(prevOperand, display.textContent, currentOperator);
                    clearInfo();
                }
                buttons.forEach(btn => btn.classList.remove('active-operator'));
                break;
            default:
                display.textContent= 'ERROR!';
                break;
        }

    })
})