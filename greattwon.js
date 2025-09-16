// how to fonnd greater number in three number;

// function findGreatestNumber(num1, num2, num3) {
//     //  Only change code below this line
//     if(num1 >= num2 && num1 >= num3){
//       return num1;
//     }else if(num2 >= num1 && num2 >= num3){
//         return num2;
//     }else{
//       return num3;
//     }
    
// }
// console.log(findGreatestNumber(20,3,43));

let num1 = 20;
let num2 = 3;
let num3 = 43;
if(num1 >= num2 && num1 >= num3){
  console.log(num1,num3);
  
}else if(num2 >= num1 && num2 >= num3){
    console.log(num2,num1);
    
}else{
  console.log(num3,num1);
  
}