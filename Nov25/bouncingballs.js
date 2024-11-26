function bouncingBall(h,  bounce,  window) {
    // your code here
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
      return -1;
    }
  
    let count = 0;
  
    while (h > window) {
      count++;
      h *= bounce; 
  
      if (h > window) {
        count++;
      }
    }
  
    return count;
  }
  
  // Validate the input conditions
  // Loop to simulate the ball's bounces
  // Ball passes the window on the way down
  // Ball bounces to a new height
  // If the ball is still above the window after bouncing, count the upward pass