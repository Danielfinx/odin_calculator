const display = document.querySelector("#inputBox");
const btns = document.querySelectorAll("button");

let operator = '';
let firstOperand = '';
let secondOperand = '';


const add = (a, b) => {
    return +a + +b;
}

const substract = (a, b) => {
    return +a - +b;
}

const multiply = (a, b) => {
    return +a * +b;
}

const divide = (a, b) => {
    clear();
    return b == 0 ? "lmao" : +a / +b;
}

const clear = () => {
    operator = '';
    firstOperand = '';
    secondOperand = '';
}

const operate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            clear();
            return 'Syntaxis Error!';
    }
}

const displayText = (string) => {
    if (isNaN(+display.textContent)) {
        display.textContent = '';
    }
    if (display.textContent.length < 15) {
        display.textContent += string;
    }
}

const addOperator = (op) => {
    const current = display.textContent;
    if (current != '' && typeof(+current) == 'number'){
        if (!firstOperand) {
            firstOperand = +current;
        } else if (operator) {
            display.textContent = operate(firstOperand, current, operator);
        }
    }
    operator = op;
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch (btn.id) {
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
                displayText('.');
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
            case 'clearBtn':
                clear();
                display.textContent= '';
                break;
            case 'enterBtn':
                display.textContent= operate();
                break;
            default:
                display.textContent= 'ERROR!';
                break;
        }
    })
})