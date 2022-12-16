/* 
Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

Example 1:
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

Example 2:
Input: s = "Hello"
Output: 1
*/

const message = "Hello, my name is John";

const getSegment = (str) => {
    let count = 0;
    const segments = str.split(" ");
    segments.map((item) => {
        if (item !== "") count++;
    });
    return count
};

console.log(getSegment(message));
