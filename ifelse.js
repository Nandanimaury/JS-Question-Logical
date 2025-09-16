//    Check if Positive or Negative

function checkNumber(number) {
    //  Only change code below this line
    if(number >=6){
        return "number is Positive";
    }
    else if(number < 0){
        return " Number is  Negative";
    }
    else{
       return " Number is  Zero";
    }

}
console.log(checkNumber(6));//positive
console.log(checkNumber(0));//Zero
console.log(checkNumber(-6));//Negative


// changing if else statement

function testSize(num) {
    // Only change code below this line
    if(num < 5){
      return 'Tiny';
    }
    else if(num < 10){
      return 'Small';
    }
    else if(num< 15){
      return 'Medium';
    }
    else if(num < 20){
      return 'Large';
    }
    else if(num >= 20){
      return 'Huge';
    }else{
  
  
    return "Change Me";
    }
    // Only change code above this line
  }
  
 console.log(testSize(7));
 console.log(testSize(8));
 console.log(testSize(10));
 console.log(testSize(20));
 console.log(testSize(17));