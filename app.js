// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// take in string of one or more words
//      only letters and spaces
// reverse in place all five letter words:
// convert str to array: const myArray = str.split(" ")
// loop over myArray:
// if word.length >= 5 word.reverse()
// return myArray

const spinWords = (string) => {
  const myArray = string.split(" ");

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length >= 5) {
      myArray[i] = myArray[i].split("").reverse().join("");
    }
  }
  return myArray.join(" ");
};
