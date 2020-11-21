// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const totalLength = 2 * n - 1;
  for (let row = 1; row <= n; row++) {
    const numOfPound = 2 * row - 1;
    const spaceLengthOneSide = (totalLength - numOfPound) / 2;
    let layer = "";
    for (let l = 1; l <= totalLength; l++) {
      if (l <= spaceLengthOneSide || l > spaceLengthOneSide + numOfPound) {
        layer += " ";
      } else {
        layer += "#";
      }
    }
    console.log(layer);
  }
}

module.exports = pyramid;

// function pyramid(n) {
//   const totalLength = 2 * n - 1;
//   for (let row = 1; row <= n; row++) {
//     const numOfPound = 2 * row - 1;
//     const spaceLengthOneSide = (totalLength - numOfPound) / 2;
//     let layer = "";
//     for (let l = 1; l <= totalLength; l++) {
//       if (l <= spaceLengthOneSide || l > spaceLengthOneSide + numOfPound) {
//         layer += " ";
//       } else {
//         layer += "#";
//       }
//     }
//     console.log(layer);
//   }
// }
