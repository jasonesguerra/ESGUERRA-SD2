// This is how we print an output using JS
// console.log(StringContent or VariableName); 
console.log("Hello World!");

// to use comment we need to use -> // for single line comment

// and for multi line comment we need to use -> /* */

//[SECTION] VARIABLES

// A variable is a container for storing data values that can be modified afterwards except constant variables. It is a fundamental concept in programming that allows us to store and manipulate data in our programs. Variables can hold different types of data, such as numbers, strings, booleans, and more complex data structures like arrays and objects.

// In JavaScript, we declare a variable using the var, let, or const keyword followed by the variable name and an optional assignment of a value.

//[SECTION] DATA TYPES

//Numeric DATA TYPES

/* 

let variableName = value; --> No INITIALIZED VALUE
let variableName = value; --> INITIALIZED VALUE


*/

let age;
let height = 160;

console.log(height); 

//JS IS A LOOSE TYPED LANGUAGE
console.log(height)
console.      log(   height   )

console
.



log


(height); 

// SYNCRHONOUS LANGUAGE ->> JS

let gwa = 99.75;

console.log(gwa);

//Character DATA TYPE

let firstName = "Yoorha";

console.log(firstName);

//type of -> to check a variable's data type

console.log(typeof gwa);
console.log(typeof firstName);
console.log(typeof height); 

//TEXT CASING IN JS
// CAMEL CASING ->> firstName, lastName, middleName
// SNAKE CASING ->> first_name, last_name, middle_name
// PASCAL CASING ->> FirstName, LastName, MiddleName
// KEBAB CASING ->> first-name, last-name, middle-name (NOT USED IN JS)
// PASCAL KEBAB CASING ->> First-Name, Last-Name, Middle-Name (NOT USED IN JS)

//BOOLEAN DATA TYPES

let isMarried = false;
let isRegistered = true;

console.log(isMarried);
console.log(isRegistered);
console.log(typeof isMarried);
console.log(typeof isRegistered);   

//CONCATENATION ->> combining two or more strings together

let province = "Pampanga";

console.log("I am from " + province);
console.log("My Overall GWA is " + gwa);