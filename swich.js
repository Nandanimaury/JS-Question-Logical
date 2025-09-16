// const readlinesync = require('readline-sync');
// let a = readlinesync.question("enter your number: ");
// let b = readlinesync.question("enter your number: ");

// console.log(a+b);


// process.stdin.resume();
// process.stdin.setEncoding("");

// let input = "";
// process.stdin.on(("data"), function a(b){
//     input += b;
// })

// process.stdin.on(("end"), function(){
//     let lines = input.trim().split("\n");
//     console.log(lines)
// })
// Write a program to print numbers from 1 to 10 using a loop.
// let n = 10;
// let i = 0;
// while (n>i) {
//     i++
//     console.log(i);
// }

// Print all even numbers from 1 to 50 using a loop.
// let n = 50;
// let i = 0; 
// while (n>=i) {
    
//     if (i%2===0) {
//         console.log(i);
        
//     }
//     i++;
// }

// Reverse print numbers from 10 to 1 using a loop.
// let n = 12345678910;
// let sum = 0;
// while (n > 0) {
//     let d = n % 10;
//     sum = sum * 10 + d;
//     n = Math.floor(n/10)
// }
// console.log(sum);
  
// Print the sum of the first 10 natural numbers using a loop.
// let num = 10;
// let i = 0;
// let sum = 0;
// while (num>i) {
//     if (i % 2 === 0) {
//         sum += i;
        
//     }
    
//     i++;
// }
// console.log(sum);  


// Print the multiplication table of a given number using a loop.
// let n = 10;
// for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= n; j++) { 
//      console.log(`${i} X ${j} = ${j*i}`);  
//     }
// }

// Create an array of 5 numbers and print all elements using a loop.
// let arr = [1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
// }
// console.log(arr);

// Find the largest number in an array.
// let arr = [2,5,4,7];
// let larg = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > larg) {
//         larg = arr[i];
//     } 
// }
// console.log(larg);

// swapping without temp
// let a = 1;
// let b = 2;
// a = a+b;
// b = a-b;
// a = a-b;
// console.log(a,b);

// Find the smallest number in an array.
// let arr = [2,5,4,7];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);


// Find the average of numbers in an array.
// let arr = [23,3,5,4,6,7,78];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum+= arr[i];
//     sum = Math.floor(sum / arr.length);
// }

// console.log(sum);

// sum of Range
// let M = 2;
//  let N = 7;
//  let sum = 0;
//  for (let i = M; i <= N; i++) {
//      sum = sum+=i;
    
//  }
//  console.log(sum);

// Find the sum of all elements in an array.
// let arr = [2,4,3,5,76,8,];
// let som = 0;
// for (let i = 0; i < arr.length; i++) {
//     // if (arr[i]% 2===0) {
//          som = som += arr[i];
//     // }
    
// }
// console.log(som);

// Find the average of numbers in an array.
// let arr = [2,3,4,5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// sum = Math.floor(sum/arr.length);
// console.log(sum);

// Reverse an array without using the reverse() method.
// let arr = [12,41,32,5,6,78,8];
// let sum = [];
// for (let i = arr.length-1; i >= 0; i--) {
//     // while (arr[i]>0) {
//     //  let digit = arr[i]%10;
//     //  sum = sum *10+digit;
//     //  arr[i] = Math.floor(arr[i]/10);
//     // }
// if (sum === "") {
//     sum+= arr[i];
// }else{
//     sum += arr[i] + ",";
// } 
// }
// console.log(sum);

// Find the index of a given element in an array.
let arr = [23,12,34,56,65];
let elm = 34;
let index = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elm) {
        index = i;
        break;
    }
    
}
console.log(index);



