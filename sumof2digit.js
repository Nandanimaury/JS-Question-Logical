// function sumOfDigits(number) {
//     let sum = 0;

//     while (number > 0) {
//         sum += number % 10; 
//         number = Math.floor(number / 10); 
//     }  
//     while (sum >= 10) {
//         let tempSum = 0;
//         while (sum > 0) {
//             tempSum += sum % 10;
//             sum = Math.floor(sum / 10);
//         }
//         sum = tempSum;
//     }

//     return sum;
// }

// // Test cases
// console.log(sumOfDigits(483)); // Expected output: 6
// console.log(sumOfDigits(837)); // Expected output: 9

/////////////
// let num = 483;
// let sum = 0;
// while(num > 0){
// let digit = num % 10;
// sum+=digit;
// num = Math.floor(num/10);
// }
// console.log(sum);

/////////////////////
let num = 456;  

while (num >= 10) {  
  let sum = 0;
  
  while (num > 0) {
    sum += num % 10;  
    num = Math.floor(num / 10);  
  }
  num = sum;  
}
console.log(num);


/////////////////
// function sumOfDigits(N) {
//   // Only change code below this line
//   let sum = 0;
//   for (let i = N; i > 0; i = Math.floor(i / 10)) {
//     sum += i % 10; 
//   }
//   while (sum >= 10) {
//     let temp = 0;
//     for (let i = sum; i > 0; i = Math.floor(i / 10)) {
//       temp += i % 10;
//     }
//     sum = temp;
//   }

//   return sum;
//   // Only change code above this line
// }
