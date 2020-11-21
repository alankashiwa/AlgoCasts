// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCount = {};
  let maxNum = 0;
  let maxChar = "";

  // iterate over iterable objects: String or Array
  for (let ch of str) {
    if (charCount[ch]) {
      charCount[ch] += 1;
    } else {
      charCount[ch] = 1;
    }
  }

  // iterates over enumerable properties of an object
  for (let char in charCount) {
    if (charCount[char] > maxNum) {
      maxNum = charCount[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//   const charCount = {};
//   let maxNum = 0;
//   let maxChar = "";
//   for (let ch of str) {
//     if (charCount[ch]) {
//       charCount[ch] += 1;
//     } else {
//       charCount[ch] = 1;
//     }
//     if (charCount[ch] > maxNum) {
//       maxNum = charCount[ch];
//       maxChar = ch;
//     }
//   }
//   return maxChar;
// }
