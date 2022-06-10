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

// const spinWords = (string) => {
//   const myArray = string.split(" ");

//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i].length >= 5) {
//       myArray[i] = myArray[i].split("").reverse().join("");
//     }
//   }
//   return myArray.join(" ");
// };

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

// const digital_root = (n) => {
//   while (n > 9) {
//     n = sumOfDigits(n);
//   }
//   return n;
// };

// const sumOfDigits = (n) => {
//   const nStr = String(n);
//   let total = 0;

//   for (let i = 0; i < nStr.length; i++) {
//     total += Number(nStr[i]);
//   }
//   return total;
// };

// ***********************
// Very simple, given an integer or a floating-point number, find its opposite.
// PLAN:
// take in number
// convert it to negative
// return that number

// const opposite = (number) => number * -1;

// ******************************************************
// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]

// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

// PLAN:
// take in ticket: list of arrays, each with two vals (str and num)
// let miniWins = 0;
// for each in ticket:
// loop over str
// if charAt letter = num: miniWins ++  AND break loop

// reutrn miniWins >= win ? "Winner!" : "Loser!"

// const bingo = (ticket, win) => {
//   let miniWinCount = 0;

//   for (let i = 0; i < ticket.length; i++) {
//     const currentString = ticket[i][0];
//     const neededWinNumber = ticket[i][1];

//     for (let j = 0; j < currentString.length; j++) {
//       if (currentString.charCodeAt(j) === neededWinNumber) {
//         miniWinCount++;
//         break;
//       }
//     }
//   }
//   return miniWinCount >= win ? "Winner!" : "Loser!";
// };

// ******************************************************

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// PLAN:
// first, write fxn that takes in num and returns all its digits multiplied together

// let count = 0;
// while num is > 9:
// return persistence (all digits of num multiplied together)
// return count;

const persistence = (num) => {};

const multiplyDigits = (num) => {};
