function sumInRange(M, N) {
    let sum =0;
   for(let i = M; i <= N ; i++){
    sum += i;
   }
    return sum;
 }
 console.log(sumInRange(2,7));

 let M = 2;
 let N = 7;
 let sum = 0;
 for (let i = M; i <= N; i++) {
     sum = sum+=i;
    
 }
 console.log(sum);
 