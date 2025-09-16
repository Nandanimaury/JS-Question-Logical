// function printPattern(arr) {
//     let result = "";
//     for(let i = 0 ; i < arr.length; i++){
//         for(let j = 0; j < arr[i]; j++){
//             result += ">";
//         }
//         if(i < arr.length - 1){
//             result += "\n";
//         }
//     }
//     return result;
// }
// console.log(printPattern([2, 3, 5, 2, 1]));

let arr = [2, 3, 5, 2, 1];
let res = " ";
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]; j++) {
        res += "*";

        
    }
    if(i < arr.length-1){
        res += "\n";
    }
    
}
console.log(res);