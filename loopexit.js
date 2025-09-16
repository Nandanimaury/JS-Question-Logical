// let n = 7;
// let arr = [0,1,2,3,4,6,9,9];
// let i = 0;
// while(i<n){
// 	if(arr[i]%3 == 0){
//   	console.log(i);
//     break;
  
//   }
// }

// /////
function checkTargetExists(size, arr, target) {
    // Only change code below this line
    for (let i = 0; i < size; i++) {
        if (arr[i] === target) {
            return true; 
        }
    }
    return false; 
 }
 
 // Test cases
 console.log(checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3)); 
 console.log(checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 8)); 
 