function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

let display = document.querySelector("#display");

let num1 = 0.0;
let num2 = 0;
let displayNum1 = document.querySelector("#display-num-1");
let displayNum2 = document.querySelector("#display-num-2");

let operator = "";
let displayOperator = document.querySelector("#display-operator");

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
    console.log(out);
}

function updateNumber(event){
    if(operator == ""){
        num1 = num1 * 10;
        num1 += parseInt(event.target.value);

        displayNum1.textContent = num1;
    }
    else{
        num2 = num2 * 10;
        num2 += parseInt(event.target.value);

        displayNum1.textContent = num2;
    }
}

operate(3, 2, "+");
operate(8, 5, "-");
operate(2, 4, "*");
operate(9, 3, "/");
operate(10, 5, "a");
operate("+", 10, 5);