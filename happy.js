// let n = 19;
// let seen = {}; // To track visited numbers

// while (n !== 1 && !seen[n]) {
//     seen[n] = true; // Mark number as seen
//     let sum = 0, temp = n;
    
//     while (temp > 0) { 
//         let digit = temp % 10; // Extract last digit
//         sum += digit * digit; // Square and add
//         temp = (temp - digit) / 10; // Remove last digit
//     }
    
//     n = sum; // Update number
// }

// console.log(n === 1 ? "Happy Number" : "Not a Happy Number");

//////////////////////////////////////////////////////////////////////

// function isHappyNumber(n) {
//     let seen = {}; // To track visited numbers
//     while (n !== 1 && !seen[n]) {
//         seen[n] = true; // Mark number as seen
//         let sum = 0, temp = n;
//         while (temp > 0) { 
//             let digit = temp % 10; // Extract last digit
//             sum += digit * digit; // Square and add
//             temp = (temp - digit) / 10; // Remove last digit
//         }
//         n = sum; // Update number
//     }
//     return n === 1; // If 1, it's a happy number
// }

// // Example Usage
// console.log(isHappyNumber(19)); // true (Happy Number)
// console.log(isHappyNumber(4));  // false (Not a Happy Number)

// let number = 370;
// let temp = number;
// let sum = 0;
// while(temp>0){
//     let digit = temp%10;
//     sum+=digit**3;
//     temp = Math.floor(temp/10);
// }
// if(sum==='number'){
//     console.log("number =", 'is an Armstrong number');
    
// }else{
//     console.log("number =", 'is not an Armstrong number');
    
// }

let number = 19;
let temp = number;
let sum = 0;
while(temp > 0){
    let digit = temp % 10;
    sum += digit * digit;
    temp = Math.floor(temp/10);
}
if(sum == 1){
    console.log("number =", 'happy num');
}else{
    console.log('number=' , 'not happy');
    
}