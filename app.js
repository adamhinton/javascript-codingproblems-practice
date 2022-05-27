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

// **************************************

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// PLAN:
// take in n (int > 0)
// while String(n).length > 1:
// Find sum of digits of n
// If digits.length > 1:
// continue reducing until single digit
// return n

const digital_root = (n) => {
  while (n > 9) {
    n = sumOfDigits(n);
  }
  return n;
};

const sumOfDigits = (n) => {
  const nStr = String(n);
  let total = 0;

  for (let i = 0; i < nStr.length; i++) {
    total += Number(nStr[i]);
  }
  return total;
};

console.log("digital_root(16):", digital_root(16));
console.log("digital_root(942):", digital_root(942));
console.log("digital_root(493193):", digital_root(132189));
console.log("digital_root(493193):", digital_root(493193));

// console.log("sumOfDigits(25):", sumOfDigits(25));
// console.log("sumOfDigits(0):", sumOfDigits(0));
// console.log("sumOfDigits(179):", sumOfDigits(179));
