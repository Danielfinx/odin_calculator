const display = document.querySelector("#inputBox");
const btns = document.querySelectorAll("button");

const add = (a, b) => {
    return a + b;
}

const substract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return b == 0 ? "Can't divide by 0" : a / b;
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
            return 'Syntaxis Error!';
    }
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        switch (btn.id) {
            case 'num0':
                display.textContent+= '0';
                break;
            case 'num1':
                display.textContent+= '1';
                break;
            case 'num2':
                display.textContent+= '2';
                break;
            case 'num3':
                display.textContent+= '3';
                break;
            case 'num4':
                display.textContent+= '4';
                break;
            case 'num5':
                display.textContent+= '5';
                break;
            case 'num6':
                display.textContent+= '6';
                break;
            case 'num7':
                display.textContent+= '7';
                break;
            case 'num8':
                display.textContent+= '8';
                break;
            case 'num9':
                display.textContent+= '9';
                break;
            case 'dot':
                display.textContent+= '.';
                break;
            case 'addOp':
                display.textContent+= '+';
                break;
            case 'subsOp':
                display.textContent+= '-';
                break;
            case 'multOp':
                display.textContent+= 'x';
                break;
            case 'divOp':
                display.textContent+= '/';
                break;
            case 'clearBtn':
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