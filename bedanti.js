
 function printNameMultipleTimes(number, name) {
    // Only change code below this line
    let result = [];
    let i = 0;

    while (i < number) { 
        result[i] = name; 
        i++; 
    }
    
    return result; 
     
}
  
console.log(printNameMultipleTimes(2, "Bedanti"));

 
//  printNameMultipleTimes(2, "Bedanti");




// function printNameMultipleTimes(number, name) {
//         // Only change code below this line
//         let result = "";
//         let i = 0;
        
//         while (i < number) { 
//           if (result === "") {
//             result = ` "${name}"`; 
//           } else {
//             result = result +  `, "${name}"`; 
//           }
//           i++; 
//         }
        
//         return "[" + result + "]"; 
//     }
      
//       console.log(printNameMultipleTimes(2, "Bedanti")); 


function printNameMultipleTimes (number, name){
    let result= [];
    for(let i = 0; i< number; i++){
        result.push(name);
   }
     return result;
   }
  console.log(printNameMultipleTimes (2, 'Bedanti'));
 