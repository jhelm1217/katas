function rot13(message){
    //your code here
    return message.split('').map(char => {
      if (char >= 'a' && char <= 'z') {
        // For lowercase letters
        return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
      } else if (char >= 'A' && char <= 'Z') {
        // For uppercase letters
        return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
      } else {
        // Non-alphabetical characters remain unchanged
        return char;
      }
    }).join('');
  }
  
  
  
  // we need to split the string to seperate each type
  // we need an equation for lowercase
  // we need an equation for uppercase
  // we need an equation for numbers and other characters