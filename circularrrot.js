function circularRotation(arr, num) {
    // Ensure num is within the array bounds and handle the case where num % arr.length === 0
    num = num % arr.length;
    
    // If num is 0, return the original array (no rotation needed)
    if (num === 0) {
      return arr;
    }
  
    // Rotate by slicing and concatenating the two parts
    return arr.slice(-num).concat(arr.slice(0, arr.length - num));
  }
  