function smallestMulti(n) {

     if(n %2 === 0){
            return n;
        }
        else {
            return (n *2);
        }  
    
}

console.log(smallestMulti(5));
console.log(smallestMulti(6));
console.log(smallestMulti(3));

//
// for( let i = 0; i<5; i++){
//     console.log('hello',i);
// }
// // odd
// for(let i = 0 ; i <=5 ; i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }
// // revers odd
// for(let i = 5; i >=1 ; i--){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }
