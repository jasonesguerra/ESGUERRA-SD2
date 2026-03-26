// console.log("Hello World!");

//[SECTION] JS Functions
// Performs specific tasks and eliminate repeatitive codes

//SYNTAX: function functionName(parameters) {// code block}

console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

let num1, num2;


function greet() {
    console.log("Hello, Mexico, Pampanga!");
}

// Invocation/Imvoke or Function Calling

greet();

function greetName() {
    console.log("Hello, User!");
}

function startCalculator() {
    let userInput1 = parseInt(prompt("Please select an action: \n[1]. Input Numbers \n[2]. Sum \n[3]. Difference \n[4]. Product \n[5]. Quotient \n[6]. Reset"));

    switch (userInput1) {
        case 1:
            enterNumbers();
            break;
        case 2:
            sum();
            break;
        case 3:
            difference();
            break;
        case 4:
            product();
            break;
        case 5:
            quotient();
            break;
        case 6:
            reset();
            break;
    }
}

function enterNumbers() {
    let inputNum1 = parseInt(prompt("Enter the 1st number: "));
    let inputNum2 = parseInt(prompt("Enter the 2nd number: "));
    if (isNaN(inputNum1) || isNaN(inputNum2)) {
        alert("Please enter valid numbers.");
        return;
    }
    num1 = inputNum1;
    num2 = inputNum2;
    alert("Numbers entered successfully.");
}

function sum() {
    let inputNum1 = parseInt(prompt("Enter the 1st number: "));
    let inputNum2 = parseInt(prompt("Enter the 2nd number: "));
    num1 = inputNum1;
    num2 = inputNum2;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    } else {
        let sum = num1 + num2;
        alert(`The sum of ${num1} and ${num2} is ${sum}.`);
        // alert(The difference of ${num1} and ${num2} is ${num1 - num2});
    }
}

function difference() {
    let inputNum1 = parseInt(prompt("Enter the 1st number: "));
    let inputNum2 = parseInt(prompt("Enter the 2nd number: "));
    num1 = inputNum1;
    num2 = inputNum2;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    } else {
        let difference = num1 - num2;
        alert(`The difference of ${num1} and ${num2} is ${difference}.`);
        // alert(The sum of ${num1} and ${num2} is ${num1 + num2}.);
    }
}

function product() {
    let inputNum1 = parseInt(prompt("Enter the 1st number: "));
    let inputNum2 = parseInt(prompt("Enter the 2nd number: "));
    num1 = inputNum1;
    num2 = inputNum2;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    } else {
        let product = num1 * num2;
        alert(`The product of ${num1} and ${num2} is ${product}.`);
    }
}

function quotient() {
    let inputNum1 = parseInt(prompt("Enter the 1st number: "));
    let inputNum2 = parseInt(prompt("Enter the 2nd number: "));
    num1 = inputNum1;
    num2 = inputNum2;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    } else if (num2 === 0) {
        alert("Cannot divide by zero.");
        return;
    } else {
        let quotient = num1 / num2;
        alert(`The quotient of ${num1} and ${num2} is ${quotient}.`);
    }
}

function reset() {
    num1 = 0;
    num2 = 0;
    alert("Numbers have been reset.");
}
startCalculator();