const l = [23, 45, 71, 90];

function reverseAndPrintArray(arr) {
    const reversedArray = []
   // Only change code below this line
   while (arr > 0){
   let digit = arr % 10
    reversedArray = reversedArray * 10 + digit;
    arr = Math.floor(arr/10)
   }
  return reversedArray;
}



  

console.log(reverseAndPrintArray([90,71,23,45]));

//
function reverseAndPrintArray(arr) {
    let reversedArray = [];

    
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    
    for (let i = 0; i < reversedArray.length; i++) {
        console.log(reversedArray[i]);
    }

    return reversedArray; 
}

// Test cases
console.log(reverseAndPrintArray([45, 23, 71, 90])); 



/////
const L = [23, 45, 71, 90];

function reverseAndPrintArray(arr) {
    const reversedArray = [];
    // Only change code below this line

    // Manually reverse the array
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    // Print each element of the reversed array
    for (let i = 0; i < reversedArray.length; i++) {
        console.log(reversedArray[i]);
    }

    // Only change code above this line
    return reversedArray;
}

console.log(reverseAndPrintArray(L));
