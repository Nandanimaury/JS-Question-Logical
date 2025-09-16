function sumOfOddNumbers(n) {
   let sum = 0;
   for (let i = 1; i <= n; i += 2) { 
     sum += i;
   }
   return sum;
}
 
 
console.log(sumOfOddNumbers(100)); 
console.log(sumOfOddNumbers(15)); 

~// sum of odd number

function sumOfOddNumbers(N) {
   // Only change code below this line
   let sum = 0;
   for(let i = 1; i <= N; i+2){
      if(N % 2 != 0){
      
         sum +=i
     } 
   }
   
   return sum;
   
   
}
console.log(sumOfOddNumbers(20));