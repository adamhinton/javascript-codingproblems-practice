// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// PLAN:
// const solution = "";
// Convert num in to string
//loop over string:
//// for each, solution += String(Number(string[i]) ** 2)
////// not sure I have that syntax right
// convert solution to num
// return solution;

// This passes all tests. yay!
function squareDigits(num) {
  let solution = "";
  const numToString = String(num);

  for (let i = 0; i < numToString.length; i++) {
    const exponentToBeAdded = String(Number(numToString[i]) ** 2);
    solution += exponentToBeAdded;
  }

  return Number(solution);
}

// *****************
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// PLAN:
// Need to figure out if num is perfect square
// Find sq rt of num
// if num is integer, return true. else false

var isSquare = function (n) {
  const mySquareRoot = Math.sqrt(n);
  return Number.isInteger(mySquareRoot);
};

// ************
