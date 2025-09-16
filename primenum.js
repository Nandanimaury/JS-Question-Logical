// function primeNumber(num){
    // let result = "";
    
//     for(let i = 1; i <= num; i++){
//         let count = 0;
//         for(let j = 2 ; j <=1/2; j++){
//             if(i%j==0){
//                 count=1;
//                 break;
//             }
//         }
//        if(count == 0){

//        }
//     }
// return count;
// }
// console.log(primeNumber(100));

//
// function isPrime(number) {
//     if (number <= 1) return false;
//     if (number <= 3) return true; 
//     if (number % 2 === 0 || number % 3 === 0) return false; 

//     for (let i = 5; i * i <= number; i += 6) {
//         if (number % i === 0 || number % (i + 2) === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Test the function
// const num = parseInt(prompt("Enter a number: "), 10);
// if (isPrime(num)) {
//     console.log(`${num} is a prime number.`);
// } else {
//     console.log(`${num} is not a prime number.`);
// }


//
// function isPrime(number) {
//     if (number <= 1) return false; 
//     if (number <= 3) return true; 
//     if (number % 2 === 0 || number % 3 === 0) return false; 

//     let i = 5;
//     while (i * i <= number) {
//         if (number % i === 0 || number % (i + 2) === 0) {
//             return false; 
//         }
//         i += 6; 
//     }

//     return true;
// }

// // Test the function
// const num = parseInt(prompt("Enter a number: "), 10);
// if (isPrime(num)) {
//     console.log(`${num} is a prime number.`);
// } else {
//     console.log(`${num} is not a prime number.`);
// }

//
for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) { 
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
}


// //
// console.log("Prime numbers between 1 and 100:");
// for (let number = 2; number <= 100; number++) {
//     let isPrime = true; // Assume the number is prime

//     // Check divisors from 2 to number / 2
//     for (let i = 2; i <= number / 2; i++) {
//         if (number % i === 0) {
//             isPrime = false; // Not a prime number
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(number);
//     }
// }



//
// function primeNumberCheck(number) {
//   if (number <= 1) {
//       console.log("No");
//       return;
//   }

//   let isPrime = true;

//   // Check divisors from 2 to number / 2
//   for (let i = 2; i <= number / 2; i++) {
//       if (number % i === 0) {
//           isPrime = false;
//           break;
//       }
//   }

//   if (isPrime) {
//       console.log("Yes");
//   } else {
//       console.log("No");
//   }
// }

// // Test cases
// primeNumberCheck(97); // Should output: Yes
// primeNumberCheck(49); // Should output: No

// let number = 84; 
// let divisor = 2;

// while (number > 1) {
//     if (number % divisor === 0) {
//         console.log(divisor);
//         number /= divisor; 
//     } else {
//         divisor++; 
//     }
// }


// let num = 84;
// for (let i = 2; i <= num; i++) {
//     if (num % i === 0) { 
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break; 
//             }
//         }
//         if (isPrime) { 
//             console.log(i);
//             while (num % i === 0) {
//                 num /= i;
//             }
//         }
//     }
// }


