// function findFactors(num) {
//     let i = 1; 
//     let factors = ""; 

//     while (i <= num) {
//         if (num % i === 0) {
//             factors += i + " "; 
//         }
//         i++; 
//     }

//     return factors.trim();
// }


   
// console.log(findFactors(24)); 


// //
// function findFactors(num) {
//     let factors = [];
    
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             factors.push(i); 
//         }
//     }
    
//     return factors;
// }

// // Example usage:

// console.log(findFactors(12)); 

//// In Flowchart 


let n = 12;
for(let i = 1; i < n ; i++){
    if(n % i === 0){
        console.log(i);
    }
}
console.log(n);


function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(86);