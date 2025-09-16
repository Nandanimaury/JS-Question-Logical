// function calculateElectricityBill(units) {
//     let totalBill = 0;

//     // Calculate bill for the first 50 units
//     if (units > 50) {
//         totalBill += 50 * 0.50;
//         units -= 50;
//     } else {
//         totalBill += units * 0.50;
//         units = 0;
//     }

//     // Calculate bill for the next 100 units
//     if (units > 100) {
//         totalBill += 100 * 0.75;
//         units -= 100;
//     } else {
//         totalBill += units * 0.75;
//         units = 0;
//     }

//     // Calculate bill for the remaining units
//     if (units > 0) {
//         totalBill += units * 1.20;
//     }

//     // Add a surcharge of 20%
//     totalBill += totalBill * 0.20;

//     // Return the total bill
//     return Math.round(totalBill); // Rounding to nearest whole number
// }

// // Test cases
// console.log(calculateElectricityBill(200)); // Expected: 192
// console.log(calculateElectricityBill(100)); // Expected: 75
// console.log(calculateElectricityBill(160)); // Expected: 134


let units = 200;
let totalBill = 0;
if (units > 50) {
 totalBill += 50 * 0.50;
 units -= 50;
} else {
 totalBill += units * 0.50;
 units = 0;
}

if (units > 100) {
 totalBill += 100 * 0.75;
 units -= 100;
} else {
 totalBill += units * 0.75;
 units = 0;
}

if (units > 0) {
 totalBill += units * 1.20;
}
totalBill += totalBill * 0.20;

totalBill = Math.round(totalBill)
console.log(totalBill);
    
