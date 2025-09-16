// function mergeSortedArrays(arr1, arr2) {
//     let result = [];
//     let i = 0, j = 0;
  
//     while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         result.push(arr1[i]);
//         i++;
//       } else {
//         result.push(arr2[j]);
//         j++;
//       } 
//     }
  
//     return result.concat(arr1.slice(i)).concat(arr2.slice(j));
//   }
  
//   console.log(mergeSortedArrays([1,2,5,6], [3,4,7,9])); // [1, 2, 3, 4, 5, 6,7,8,9]

  ///////////////////////////////////
//   function mergeSortedArrays(arr1, arr2) {
//     let result = [];
//     let i = 0, j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//         } else {
//             result.push(arr2[j]);
//             j++;
//         }
//     }

//     // Add remaining elements of arr1
//     while (i < arr1.length) {
//         result.push(arr1[i]);
//         i++;
//     }

//     // Add remaining elements of arr2
//     while (j < arr2.length) {
//         result.push(arr2[j]);
//         j++;
//     }

//     return result; // Return the merged sorted array
// }

// console.log(mergeSortedArrays([1, 2, 5, 6], [3, 4, 7, 9])); // [1, 2, 3, 4, 5, 6, 7, 9]

// ////////////////////

// function mergeSortedArrays(arr1, arr2) {
//     // let result = [];
//     let arr3 = (arr1.concat(arr2));
//     // return arr3.sort();
//     // arr3.sort((a,b) =>(a-b))
//     for(let i = 0; i < arr3.length; i++){
//       for(let j = i+1; j < arr3.length; j++){
//         if(arr3[i] > arr3[j]){
//           let temp = arr3[i]
//           arr3[i] = arr3[j]
//           arr3[j] = temp
//         }
//       }
     
//     }
//     return arr3;
//     // console.log(arr3);
//     // return result;
//  }
// console.log(mergeSortedArrays([2, 4], [1, 5, 6, 7, 8]));

let arr1 = [2, 4];
let arr2 = [1, 5, 6, 7, 8];
let arr3 = arr1.concat(arr2);
for (let i = 0; i < arr3.length; i++) {
  for (let j = i+1; j < arr3.length; j++) {
    if (arr3[i] > arr3[j]) {
      let temp = arr3[i];
      arr3[i] = arr3[j];
      arr3[j] = temp;
      
    }
    
    
  }
  
}
console.log(arr3);

