// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
//   matrix(5)
//     [[ 1, 2, 3, 4, 5]],
//     [[16,17,18,19, 6]],
//     [[15,24,25,20, 7]],
//     [[14,23,22,21, 8]],
//     [[13,12,11,10, 9]]

function matrix(n) {
  const result = new Array(n);
  for (let c = 0; c < n; c++) {
    result[c] = new Array(n);
  }
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let counter = 1;
  while (startRow <= endRow && startCol <= endCol) {
    // ⇨
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;
    // ↓
    for (let j = startRow; j <= endRow; j++) {
      result[j][endCol] = counter;
      counter++;
    }
    endCol--;
    // ⇦
    for (let k = endCol; k >= startCol; k--) {
      result[endRow][k] = counter;
      counter++;
    }
    endRow--;
    // ↑
    for (let m = endRow; m >= startRow; m--) {
      result[m][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return result;
}

module.exports = matrix;
