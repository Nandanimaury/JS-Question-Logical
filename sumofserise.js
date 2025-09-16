// function smallestMulti(n) {
    
//     let multiple = 1;
      
//       for (let i = 1; i <= n; i++) {
//           multiple = (multiple,  i);
//       }
      
//       return multiple;
      
      
//   }
  
//   console.log(smallestMulti(10));
//   console.log(smallestMulti(6));

  //
  // Interesting Decimal Series

// function sumOfSeries(N) {
//     let sum =0;
//     for(let i = 1; i <= N; i++){
//         sum += 1/i;
//     }
    
//     return sum.toFixed(2);
//  }
 
//  console.log(sumOfSeries(6));
//  console.log(sumOfSeries(10));
 

let n = 6;
let sum = 0; 
for (let i = 0; i <= n; i++) {
   sum += 1/i;
   sum.toFixed(2);
}
console.log(sum);
