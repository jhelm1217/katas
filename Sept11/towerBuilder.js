function towerBuilder(nFloors) {
    // build here
    let tower = [];
  
    for (let i = 0; i < nFloors; i++) {
      // Calculate the number of spaces needed on each side here
      let spaces = ' '.repeat(nFloors - i - 1);
      // Calculate the number of '*' needed here
      let stars = '*'.repeat(2 * i + 1);
      // Form the current floor and push it to the array here
      tower.push(spaces + stars + spaces);
    }
  
    return tower;
  }
  
  
      // Calculate the number of spaces needed on each side
      // Calculate the number of '*' needed
      // Form the current floor and push it to the array
  