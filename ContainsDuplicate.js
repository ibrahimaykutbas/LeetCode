/* 
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const nums = [1, 2, 3, 1];
let newNumbers = [];

let isDuplicate = false;

const isContainsDuplicate = (nums) => {
 let uniqeArray = [... new Set(nums)];

  return nums.length == uniqeArray.length ? false : true
};

console.log(isContainsDuplicate(nums));
