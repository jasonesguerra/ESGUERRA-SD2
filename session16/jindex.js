console.log("Hello, World! This is session 16.");


// [SECTION] Selection Control 


let age = 10;


if(age >= 18) {
    console.log("You are eligible for a driver's license.");
} else {
    console.log("You are not eligible for a driver's license.");
}

let city = "Cebu";

if(city == "Manila") {
    console.log("Welcome to the capital city of the Philippines!");
}else {
    console.log("The selected Area is not the capital city of the Philippines.");
}

if(age >= 18 && city == "Cebu") {
    console.log("You can register for the event.");
}else if(age <= 18) {
    console.log("You are not eligible to register for the event.");
}else{
    console.log("All criterias are not met.");
}

let role1 = prompt("Please enter your role (admin, student, teacher):").toLocaleLowerCase();

if(role1 == "admin") {
    console.log("Welcome, Admin! You have full access to the system.");
} else if(role == "student") {
    console.log("Welcome, Student! You have limited access to the system.");
} else if(role == "teacher") {
    console.log("Welcome, Teacher! You have moderate access to the system.");
} else {
    console.log("Invalid role entered. Please enter a valid role.");
}


// 2. Switch Case Statement

let day = 2;

switch(day) {
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    case 7:
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day entered. Please enter a valid day.");
}

let role = prompt("Please enter your role (admin, student, teacher):").toLocaleLowerCase();

switch(role) {
    case "admin":
        console.log("Welcome, Admin! You have full access to the system.");
        break;
    case "student":
        console.log("Welcome, Student! You have limited access to the system.");
        break;
    case "teacher":
        console.log("Welcome, Teacher! You have moderate access to the system.");
        break;
    default:
        console.log("Invalid role entered. Please enter a valid role.");
}