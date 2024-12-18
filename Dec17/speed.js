function cockroachSpeed(s) {
    //Good Luck!
    const cmPerSecond = s * 100000 / 3600;
    return Math.floor(cmPerSecond);
  }
  
  // Convert speed from km/h to cm/s
  // 1 kilometer = 100,000 centimeters
  // 1 hour = 3600 seconds
  // convert km/h to cm/s, multiply the speed in km/h by 100000 / 3600
  // Use Math.floor() to round down to the nearest integer.
  // Return the floored value
  