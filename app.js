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

function squareDigits(num) {
  const solution = "";
  const numToString = String(num);

  for (let i = 0; i < numToString.length; i++) {
    // console.log("numToString[i]:", numToString[i]);

    const exponentToBeAdded = String(Number(numToString[i]) ** 2);
    s;
  }
  return Number(solution);
}

console.log("squareDigits(123):", squareDigits(123));
// console.log("squareDigits(0):", squareDigits(0));
// console.log("squareDigits(1234):", squareDigits(1234));
