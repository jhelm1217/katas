function countBy(x, n) {
    let z = [];
    
    for (let i = 1; i <= n; i++) {
      z.push(x * i);
    }
    
    return z;
  }
  
  // The function takes two arugments, the step value and number of elements 
  // Create an empty array call it z. 
  // start a loop, pushing the value x*I into the array of z
  // when the array z is returned, it will contain n multiples of x.