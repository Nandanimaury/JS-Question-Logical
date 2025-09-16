function oddEvenSum(arr) {
    let sumOdd = 0; 
    let sumEven = 0; 

    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i]; 
        } else {
            sumOdd += arr[i]; 
        }
    }
    // Only change code above this line

    return [sumOdd, sumEven];
}

// const inputArray = [23, 45, 32, 25, 46, 33, 71, 90];
// const result = oddEvenSum(inputArray);
console.log(oddEvenSum([23, 45, 32, 25, 46, 33, 71, 90])); 
// console.log(result[1]); 
