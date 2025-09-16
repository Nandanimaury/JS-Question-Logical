// function findSecondMax(num1, num2, num3) {
//     //  Only change code below this line
   
//     if ((num1 >= num2 && num1 <= num3)||
//     (num1 >= num3 && num1 <= num2 )){
//     return num1 ;
    
//     }
// else if ((num2 >= num1 && num2 <= num3)||
// (num2 >= num3 && num2 <= num1)){
//     return num2;
    
//     }
// else{
//       return num3;
// }
// }
// console.log(findSecondMax(10,10,5));
// console.log(findSecondMax(5,4,6));
// console.log(findSecondMax(-1,0,-2));

// //
// function secondMax(a, b, c) {
// let a = 3;
// let b = 4;
// let c = 5;

//     if ((a > b && a < c) || (a > c && a < b)) {
//         console.log(a);
         
//     } else if ((b > a && b < c) || (b > c && b < a)) {
//         console.log(b);
         
//     } else {
//         console.log(c);
        
//     }
// }
// console.log(findSecondMax(10,10,5));
// console.log(findSecondMax(5,4,6));
// console.log(findSecondMax(-1,0,-2));

// let numbers = [10, 5, 8, 20, 15];
// let first = numbers[0];
// let second = -Infinity;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]>first) {
//         second = first;
//         first = numbers[i];
//     }
//     else if (numbers[i] > second && numbers[i] !== first ) {
//         second = numbers[i];
//     }
    
    
// }
// console.log(second);

// let numbers = [10, 5, 8, 20, 15];
// let largest = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
    
//     if (numbers[i]>largest) {
//         largest = numbers[i]
//     }
// }
// console.log(largest);

let a = 7;
let b = 4;
let c = 3;

if (a > b) {
    if (a < c) {
        console.log(a);
    } else {
        if (b > c) {
            console.log(c);
        } else {
            console.log(b);
        }
    }
} else {
    if (a < c) {
        console.log(a);
    } else {
        if (b > c) {
            console.log(c);
        } else {
            console.log(b);
        }
    }
}

