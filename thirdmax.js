function findThirdMax(num1, num2, num3, num4) {
    
  
    // Step 1: Find the largest number (max1)
    // if ((num1 >= num2 && num1 <= num3 && num1 <= num4) ||
    // (num1 <= num2 && num1 >= num3 && num1 <= num4) || 
    // (num1 <= num2 && num1 <= num3 && num1 >= num4)){
    //   return  num1;
    // } else if ((num2 >= num1 && num2 <= num3 && num2 <= num4) ||
    // (num2 <= num1 && num2 >= num3 && num2 <= num4) || 
    // (num2 <= num1 && num2 <= num3 && num2 >= num4)) {
    //   return  num2;
    // } else if ((num3 >= num2 && num3 <= num1 && num3 <= num4) ||
    // (num3 <= num2 && num3 >= num1 && num3 <= num4) || 
    // (num3 <= num2 && num3 <= num1 && num3 >= num4)) {
    //   return  num3;
    // } else {
    //   return  num4;
    // }
    if (( num1 >= num2 && num1 <= num3 && num1 <= num4) || 
    (num1 <= num2 && num1 >= num3 && num1 <= num4)|| 
    (num1 <= num2 && num1 <= num3 && num1 >= num4)){
        return num1;
    }
    else if ((num2 >= num1 && num2 <= num3 && num2 <= num4)||
    (num2 <= num1 && num2 >= num3 && num2 <= num4 )||
    (num2 <= num1 && num2 <= num3 && num2 >= num4)){
        return num2;
    }
    else if((num3 >= num2 && num3 <= num1 && num3 <= num4 )||
     (num3 <= num2 && num3 >= num1 && num3 <= num4)||
      (num3 <= num2 && num3 <= num1 && num3 >= num4)){
        return num3;
    }
    else{
        return num4;
    }
    
}
console.log(findThirdMax(5,4,6,7));//5
console.log(findThirdMax(10,10,5,5));//5
console.log(findThirdMax(-1,0,-2,-3));//-2






