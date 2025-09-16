// //Check Odd or Even
// var number=32;
// var result ;
// if (number % 2 === 0){
//   result = "Even";
// }
// else{
//   result = "Odd";
// }
// console.log(result);


// // Finding Even Numbers in a Range

// function printEvenNumbers(number) {
//   // Only change code below this line
//   let sum = 0;
//   for(let i = 0; i <= 100; i++){
//   if(i %2 === 0){
//     return sum += i;
//   }


//  } 
// }
// console.log(printEvenNumbers(10))

// //
// function printEvenNumbers(number) {
//   // Only change code below this line
  
//   for(let i = 2; i <= number; i++){
//   if(number %2 === 0){
// return number;
//   }


//  } 
// }
// console.log(printEvenNumbers(10))


// let input = require('readline-sync');
// let n = input.questionInt('Enter number');

// let sum =0;
// while(n > 0){
//     sum += n%10;
//     n = Math.floor(n/10);

// }
// console.log(sum);

let arr = [1,2,3,4,5];
let reversArr = [];
for (let i = arr.length-1; i >= 0 ; i--) {
    reversArr[arr.length-1-i] = arr[i]
    
}
console.log(reversArr);


