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

let num1;
let num2;

let operator;

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

operate(3, 2, "+");
operate(8, 5, "-");
operate(2, 4, "*");
operate(9, 3, "/");
operate(10, 5, "a");
operate("+", 10, 5);