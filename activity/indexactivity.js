
function getCircleArea(radius) {
    return Math.PI * radius ** 2;
}

let circleArea = getCircleArea(5); 
console.log("Circle Area:", circleArea);

function getAverage(a, b, c, d) {
    return (a + b + c + d) / 4;
}

let averageVar = getAverage(80, 80, 79, 75); 
console.log("Average:", averageVar);

function checkIfPassed(score, total) {
    let percentage = (score / total) * 100;
    let isPassed = percentage > 75;
    return isPassed;
}

let isPassingScore = checkIfPassed(80, 100); 
console.log("Is Passing Score:", isPassingScore);
