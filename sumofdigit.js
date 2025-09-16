function sumOfDigit(number){
    let sum =0;
    while(number > 0){
        sum += number%10;
        number = Math.floor(number/10);

    }
    return sum;
}
// console.log(sumOfDigit(73473));
// console.log(sumOfDigit(73));
console.log(sumOfDigit(456));

//



// function sumOfDigits(number) {
   
//     let sum = 0;

//     // Only change code below this line
//     for(let i = 0; i < number; i++){
//         sum+=i
//     }
        

//     // Only change code above this line
    
//     return sum;

   
// }

// console.log(sumOfDigits(456));