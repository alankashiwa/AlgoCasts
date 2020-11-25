// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const memo = {};
  return function (...args) {
    if (memo[args]) {
      return memo[args];
    } else {
      memo[args] = fn.apply(this, args);
      return memo[args];
    }
  };
}

function slowFib(n) {
  // Recursive Approach
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib = memoize(slowFib);

module.exports = fib;

// function fib(n) {
//   // Iterative Approach
//   const fibArray = new Array(n);
//   fibArray[0] = 0;
//   fibArray[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
//   }
//   return fibArray[n];
// }

// function fib(n, memo = {}) {
//   // Recursive Approach
//   if (n <= 0) return 0;
//   if (n === 1) return 1;
//   if (memo[n]) return memo[n];
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// }
