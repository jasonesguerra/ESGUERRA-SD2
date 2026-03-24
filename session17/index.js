// console.log("Hello, World!");

// [SECTION] Repeatition Control Structures
// while loop
/* 
 SYNTAX:

while(condition) {
    //code block
    //iteration 

}



>>1st iteration<<
let count = 0;
while(count < 5) {
    console.log("DO LOOP: " + count);
    count++;

}

RESULT -> DO LOOP: 0

>>2nd iteration<<
let count = 1;
while(count 1 < 5) {
    console.log("DO LOOP: " + 1);
    count++;

}
RESULT -> DO LOOP: 1
>>3rd iteration<<
let count = 2;
while(count 2 < 5) {
    console.log("DO LOOP: " + 2);
    count++;

}
RESULT -> DO LOOP: 2

>>4th iteration<<
let count = 3;
while(count 3 < 5) {
    console.log("DO LOOP: " + 3);
    count++;

}
RESULT -> DO LOOP: 3
>>5th iteration<<
let count = 4;
while(count 4 < 5) {
    console.log("DO LOOP: " + 4);
    count++;
}
RESULT -> DO LOOP: 4

>>6th iteration<<
let count = 5;
while(count < 5) {
    console.log("DO LOOP: " + 5 );
    count++;
}
RESULT -> DO LOOP: 5


*/

// 2. Do-While Loop
/*
SYNTAX:

do {
    //code block
    //iteration
} while(condition);




*/



let score = 0;

do {
    console.log("DO-WHILE LOOP: " + score);
    score++;
} while (score < !5);

// 3. For Loop
/*
SYNTAX:

for(initialization; condition; iteration) {
    //code block
}   

*/

for (let i = 0; i < 5; i++) {
    console.log("FOR LOOP: " + i);
}

for (let i = 0; i < 10; i++)
    if (i % 3 === 0) {
        console.log("COUNT: " + i + " Divisible by 3");
    } else {
        console.log("COUNT: " + i);
    }   


// continue - break 
for(let count = 0; count < 20; count++){
    if (count === 18) {
        console.log("Hello it's me: " + count);
        continue;
    }
    console.log("COUNT: " + count);

}

let isRunning = true;
let accountLocked = 0;
let isLoggedIn = false;
let password = "hello123";

while(isRunning) {
    if(accountLocked >= 3) {
        let input = prompt("Enter Your Password:");
        if(input != password) {
            console.log("Incorrect Password. Try Again. Chance: ", 3 - accountLocked);
            accountLocked++;

        }else {
            isLoggedIn = true;
            alert("Welcome Back!");
        }
    }else {
        alert("Your Account is Locked. Please Try Again Later.");
        isRunning = false;
    }

}

let input = parseInt( prompt("Enter a Number :"));

for(let i = 0; i < input; i++) {
    console.log(i);
}

     
