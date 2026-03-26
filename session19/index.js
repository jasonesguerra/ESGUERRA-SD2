// console.log("Hello, World!");

// [SECTION] FUNCTIONS WITH PARAMETERS
/*
SYNTAX:


function functionName(params1, params2, ...) {
    //code block
}

*/


function greeting(){
    let userInput = prompt("Enter your name: ");
    console.log("Hello, " + userInput + "!");
}

// greeting(); --> sample function calling using basic function

//Function with parameters
// name -> is our parameter
//parameters acts as a variable or storage for a specific function.


function sayHello(name){
    console.log("Hello from function with parameter, " + name + "!");
}

// sayHello("argument") -> is to be passed for the function parameter
sayHello("KIEAN"); 

//multiple parameters
function completeName(firstName, middleName, lastName){
    console.log(`Hello, ${firstName} ${middleName} ${lastName}!`);
}

completeName("Kiean", "Dela Cruz", "Santos");

completeName("Kiean", "Dela Cruz", "Santos", "Test");


completeName("Kiean", "Santos");

// function and return statement
//return -> will hold a value to be passed outside the function

function print(){
    console.log("Hello World.");
    return "Hello World.";
}

print();

let sum = function (num1, num2){
    let total = num1 + num2;
    console.log("Total: " + total);
    return total;
}

let result = sum(40, 45);
console.log(result);

checkRemarks(result);


//if(sum >= 30) {
//    console.log("Passed");
//} else { 
//}

function checkRemarks(score){
    if(score >= 75){
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}


let registration = function(name, age){
    if(age <= 17){
        console.log("you cant! you just cant");
    } else {
        console.log(`${name}, you are successfully registered! proceed to the next step.`);
        return age;
    }
}

let value = registration("Kiean", 26);

console.log("AGE: " + value);

function checkAge(age){
    if(age <= 17){
        console.log("you cant! you just cant");
    } else if (age <= 30){ 
        console.log("You can apply for a basic account.");
    } else{
        console.log("You can apply for a premium account.");
    }
    }


checkAge(value);