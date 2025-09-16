// function perfectNumberCheck(number) {
//     // Initialize the sum of proper divisors
//     let sum = 0;
//     // Loop to find all proper divisors of the number
//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) { // Check if i is a divisor
//             sum += i; // Add the divisor to the sum
//         }
//     }
//     // Compare the sum of divisors with the number
//     if (sum === number) {
//         return ("Yes");
//     } else {
//         return ("No");
//     }
// }
// // Test cases
// console.log(perfectNumberCheck(6));  // Expected output: Yes
// console.log(perfectNumberCheck(12)); // Expected output: No
// console.log(perfectNumberCheck(28)); // Expected output: Yes
 
let number = 12;
let sum = 0;
for (let i = 0; i < number; i++) {
   if (number % i === 0) {
    sum += i;
   }
}
if (number === sum) {
    console.log('Yes');
    
}else{
    console.log('No');
    
}
