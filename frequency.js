// function findFrequency(a,size) {
   
//     const duplicate = [];
//      for(let i = 0; i < size; i++){
//          let count = 1;
//          if(a[i] !== -1){
//              for(let j = i + 1; j < size; j++){
//                  if(a[i] === a[j]){
//                      count += 1;
//                      a[j] = -1
//                  }
//              }
//          }
//          if(count > 1){
//              duplicate.push(a[i]);
//          }
         
//      }
//      return duplicate;    
//         // Only change code above this line
    
        
//     }
    
// console.log(findFrequency([2,4,2,6,3,6],6));
//     console.log(findFrequency([3,4,6,3,4,6,8,8],8));

    //
    // function findFrequency(a, size) {
    //     let freq = ""; 
    //     for (let i = 0; i < size; i++) {
    //         let count = 1;
    //         if (a[i] !== -1) {
    //             for (let j = i + 1; j < size; j++) {
    //                 if (a[i] === a[j]) {
    //                     count += 1;
    //                     a[j] = -1; 
    //                 }
    //             }
    //             freq += `${a[i]}=${count},`; 
    //         }
    //     }
    //     return freq.slice(0, -1); 
    // }
    
    // console.log(findFrequency([3,4,6,3,6], 5)); 
    // console.log(findFrequency([2,4,2,6,3,6], 6));
    
let size = [3,4,6,3,6];
let freq = ""; 
for (let i = 0; i < size.length; i++) {
    let count = 1;
    for (let j = i + 1; j < size.length; j++) {
        if (size[i] === size[j]) {
            count += 1;
            size[j] = -1; 
        }
    }
    if(size[i] !== -1) {
        freq = size[i];   
        console.log(freq + ":" + count);
            
    }
            
}
        
    
    
    
    