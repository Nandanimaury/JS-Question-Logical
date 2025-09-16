const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const {today, tomorrow } = HIGH_TEMPERATURES;
  console.log(today);
  console.log(tomorrow);
  
  // Only change code above this line

  //////////////////////////////////////////
//   const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
//   // Only change code below this line
    
//   const {today:highToday,tomorrow:highTomorrow } = HIGH_TEMPERATURES;

/////////////////////////////////////////////
//   // Only change code above this line
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
    const{today:{low:lowToday,high:highToday}}=LOCAL_FORECAST;
  
  // Only change code above this line

  /////////////////////////////////////////
  let a = 8, b = 6;
// Only change code below this line


 [a, b] = [b,a];
console.log(a, b,);

///////////////////////////////
function removeFirstTwo(list) {
    const[ , , ...rest] = list;
    return rest;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

//////////////////////////////
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0; 
// Only change code above this line

////////////////////////////////////
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);