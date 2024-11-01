function countPositivesSumNegatives(input) {

    if (!input || input.length === 0) {
      return [];
    }
  
    let positiveCount = 0;
    let negativeSum = 0;
  
    input.forEach(num => {
      if (num > 0) {
        positiveCount += 1; 
      } else if (num < 0) {
        negativeSum += num; 
      }
    });
  
    return [positiveCount, negativeSum];
  }
      
// Check if the input is empty or null, and return an empty array if so
// Initialize count for positives and sum for negatives
// Loop through each number in the array
// Increment count for positive
// Add to sum for negatives
// Return the result as an array


