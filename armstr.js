let num = 153;
let count = 0;
let temp = num;
let sum = 0;
let copy = num;
// Count digits
while (copy > 0) {
    count++;
    copy = Math.floor(copy / 10);
}
temp = num;
// Calculate armstrong sum
while (temp > 0) {
    let digit = temp % 10;
    let power = 1;

    for (let i = 0; i < count; i++) {
        power *= digit;
    }
    sum += power;
    temp = Math.floor(temp / 10);
}
console.log(sum === num ? "Armstrong Number" : "Not an Armstrong Number");

////////////////////////////////////////////////////////////////////////////

// function isArmstrongNumber(n) {
//     let count = 0, temp = n, sum = 0;
//     let copy = n;
//     while (copy > 0) {
//         count++;
//         copy = (copy - (copy % 10)) / 10;
//     }
//     temp = n;
//     while (temp > 0) {
//         let digit = temp % 10; 
//         let power = 1; 
//         for (let i = 0; i < count; i++) {
//             power *= digit;
//         }
//         sum += power;
//         temp = (temp - digit) / 10; 
//     }
//     return sum === n; 
// }
// console.log(isArmstrongNumber(153));  
// console.log(isArmstrongNumber(9474)); 
// console.log(isArmstrongNumber(123));  


