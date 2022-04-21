function duplicateEncode(word){
    //create an empty object to navigate all letters position
    const letterCount = {};
    //turn the word into an array consisting of all lowercase characters to ignore case
    const letters = word.toLowerCase().split("");
    
    //position each letter 
    letters.forEach(function (letter) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
  });
    
    //Check the if each letter appears more than once, then join the array into one word
    return letters.map(function (letter) {
      if (letterCount[letter] === 1){
        return "("
      }else{
        return ")"
      }}).join('')
  }