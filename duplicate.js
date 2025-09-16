// function findFrequency(a,size) {
// //    let size = [2,4,2,6,3,6];
//  const duplicate = [];
//    for(let i = 0; i < size; i++){
//        let count = 1;
//         if(a[i] !== -1){
//             for(let j = i + 1; j < size; j++){
//                 if(a[i] === a[j]){
//                    count += 1;
//                     a[j] = -1
//                 }
//             }
//         }
//         if(count > 1){
//          duplicate.push(a[i]);
//         }
         
//     }
//     return duplicate;    
//     // Only change code above this line
           
// }
    
// console.log(findFrequency([2,4,2,6,3,6],6));
// console.log(findFrequency([3,4,6,3,4,6,8,8],8));

let arr = [2,4,2,6,3,6];
let duplicate = "";
for(let i = 0; i < arr.length; i++){
    let count = 1;
    if(arr[i] !== -1){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count += 1;
                arr[j] = -1
            }
        }
    }
    if(count > 1){
      duplicate += arr[i];
    }
         
}
     
console.log(duplicate);