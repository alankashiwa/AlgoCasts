// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // Empty tree
  if (!root) return [0];

  // Node at each levels
  const level_widths = [];
  const queue = [[root]];
  while (queue.length > 0) {
    const level = queue.shift();
    if (level.length === 0) break; // No more nodes
    level_widths.push(level.length);
    const next_levels = [];
    for (let child of level) {
      next_levels.push(...child.children);
    }
    queue.push(next_levels);
  }
  return level_widths;
}

module.exports = levelWidth;
