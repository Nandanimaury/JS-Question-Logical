let arr1 = [0, 2, 5, 6];
let arr2 = [3, 4, 7, 1];
let mergedArr = [];

for (let i = 0; i < arr1.length; i++) {
    mergedArr[mergedArr.length] = arr1[i]; 
}

for (let i = 0; i < arr2.length; i++) {
    mergedArr[mergedArr.length] = arr2[i]; 
}

console.log(mergedArr);

///////////////////////
// let arr = [0, 2, 5, 6];
// let arr3 = [3, 4, 7, 1];

// let mergdArr = [...arr, ...arr3]; // Direct merge

// console.log(mergdArr);

/////////////////////
// let arr11 = [0, 2, 5, 6];
// let arr22 = [3, 4, 7, 1];

// let mergedArr1 = arr11.concat(arr22); // `arr1` aur `arr2` ko merge kiya

// console.log(mergedArr1);


