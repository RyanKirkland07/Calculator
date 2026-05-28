function add(leftNum, rightNum){
    return leftNum + rightNum;
}

function subtract(leftNum, rightNum){
    return leftNum - rightNum;
}

function multiply(leftNum, rightNum){
    return leftNum * rightNum;
}

function divide(leftNum, rightNum){
    return leftNum / rightNum;
}

let displayError = document.querySelector("#display-error");

let num1 = 0;
let num2 = 0;
let displayNum1 = document.querySelector("#display-num-1");
let displayNum2 = document.querySelector("#display-num-2");

let operator = "";
let displayOperator = document.querySelector("#display-operator");

let resultDisplayed = false;

function operate(leftNum, rightNum, operatorChar){
    if(typeof leftNum != 'number' || typeof rightNum != 'number'){
        console.log("invalid numbers");
        return;
    }

    let out;
    switch(operatorChar){
        case "+":
            out = add(leftNum, rightNum);
            break;
        case "-":
            out = subtract(leftNum, rightNum);
            break;
        case "*":
            out = multiply(leftNum, rightNum);
            break;
        case "/":
            out = divide(leftNum, rightNum);
            break;
        default:
            console.log("Invaid operator");
            return;
            break;
    }
    return out;
}

function updateNumber(event){
    displayError.textContent = "";
    if(resultDisplayed){
        num1 = parseInt(event.target.value);
        num2 = 0;
        operator = "";

        displayNum1.textContent = num1;

        resultDisplayed = false;
        return;
    }

    if(operator == ""){
        num1 = num1 * 10;
        num1 += parseInt(event.target.value);

        displayNum1.textContent = num1;
    }
    else{
        num2 = num2 * 10;
        num2 += parseInt(event.target.value);

        displayNum2.textContent = num2;
    }
}

function updateOperator(event){
    if(resultDisplayed){
        return;
    }
    if(operator == ""){
        operator = event.target.value;

        displayOperator.textContent = operator;
    }
    else{
        if(num2 == 0 && operator == "/"){
            zeroDivision();
            return;
        }

        num1 = +operate(num1, num2, operator).toFixed(2);
        num2 = 0;

        operator = event.target.value;

        displayNum1.textContent = num1;
        displayNum2.textContent = "";
        displayOperator.textContent = operator;
    }
}

function equate(){
    if(operator == ""){
        return;
    }
    if(num2 == 0 && operator == "/"){
        zeroDivision();
        return;
    }

    num1 = +operate(num1, num2, operator).toFixed(2);
    num2 = 0;
    operator = "";

    displayNum1.textContent = num1;
    displayNum2.textContent = "";
    displayOperator.textContent = operator;

    resultDisplayed = true;
}

function zeroDivision(){
    num1 = 0;
    num2 = 0;
    operator = "";

    displayError.textContent = "Can't divide by 0";

    displayNum1.textContent = "";
    displayNum2.textContent = "";
    displayOperator.textContent = "";
}