// find greatest number in four in four number

// function findGreatestNumber(num1, num2, num3, num4) {
    
//     if(num1 >= num2 && num1 >= num3 && num1 >= num4){
//         return num1;
//     }else if(num2 >= num1 && num2 >= num3 && num2 >= num4){
//         return num2;
//     }else if(num3 >= num1 && num3 >= num2 && num3 >= num4){
//         return num3;
//     }else{
//    return num4;
//     }
    
// }
// console.log(findGreatestNumber(98, 13, 29, 58));

let num1 = 98;
let num2 =13;
let num3 =29;
let num4 =58;
if(num1 >= num2 && num1 >= num3 && num1 >= num4){
 console.log(num1);
 
}
else if(num2 >= num1 && num2 >= num3 && num2 >= num4){
 console.log(num2);
 
}
else if(num3 >= num1 && num3 >= num2 && num3 >= num4){
 console.log(num3);
 
}
else{
 console.log(num4);  
 
}