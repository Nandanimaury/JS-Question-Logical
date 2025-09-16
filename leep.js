//     Leap Year

// function daysInAnYear(year) {
//     if(year%4 === 0 && year % 100 !== 0 || year % 400 === 0){
//       return '366';
//     }
//     else{
//       return 365;
//     } 
  
//   }
//   console.log(daysInAnYear(1800));//365
//   console.log(daysInAnYear(2000));//366
//   console.log(daysInAnYear(2024));//366

let year = 1800;
if (year % 4 === 0 && year % 100 !== 0|| year % 400 === 0) {
  console.log('Leep year');
  
}else{
  console.log('No leep year');
  
}
  