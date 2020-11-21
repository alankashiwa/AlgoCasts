// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let result = 0;
  const isNegative = n < 0;
  if (isNegative === true) {
    n = n * -1;
  }
  while (n > 0) {
    result = result * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  return isNegative ? result * -1 : result;
}

module.exports = reverseInt;

// function reverseInt(n) {
//   const reversedInt = n.toString().split("").reverse().join("");
//   return parseInt(reversedInt) * Math.sign(n);
// }
