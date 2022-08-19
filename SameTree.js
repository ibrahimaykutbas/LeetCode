/* 
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

Example 3:
Input: p = [1,2,1], q = [1,1,2]
Output: false
*/

const p = [1, 2, 3];
const q = [1, 2, 3];

let isSameTree = false;

const checkSameTree = (p, q) => {
  if (p.length == q.length) {
    p.map((num, index) => {
      if (num == q[index]) {
        isSameTree = true;
      } else {
        return (isSameTree = false);
      }
    });
  }

  console.log(isSameTree ? "Same Tree" : "Not Same Tree");
};

checkSameTree(p, q);
