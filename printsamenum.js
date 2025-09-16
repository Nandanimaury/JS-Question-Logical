function countDigits(number) {
    let count = 0;
    if(number/10){
        count+=number;
    }
    return count;
 }
 
console.log(countDigits(456));