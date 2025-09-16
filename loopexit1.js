let target = 7;
let arr = [1, 2, 3, 4, 5, 6, 7];
let size = 8; 
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        found = true;
        break; 
    }
}

console.log(found); 

////////////////////////////
let targets = 7;
let arr1 = [1, 2, 3, 4, 5, 6, 7];

let founds = arr1.includes(targets); 

console.log(founds); // Output: true

