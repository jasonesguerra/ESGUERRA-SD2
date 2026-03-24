const maxCount = parseInt(prompt("Enter a number (0-...):", "50"), 10) || 50;

for (let i = 1; i <= maxCount; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log("COUNT :" + i + " Coco");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("COUNT :" + i + " Coco Melon");
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("COUNT :" + i + " Melon");
    } else {
        console.log("COUNT :" + i);
    }
}