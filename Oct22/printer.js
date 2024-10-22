function printerError(s) {
  
    const allowed = /^[a-m]+$/;
    
    let errorCount = 0;
    for (let char of s) {
      if (!allowed.test(char)) {
        errorCount++;
      }
    }
  
    return `${errorCount}/${s.length}`;
  }
  
  
  // Define the set of allowed letters ('a' to 'm')
  // Count the number of errors (letters outside 'a' to 'm')
  // Return the error ratio in the format "errors/total"
    