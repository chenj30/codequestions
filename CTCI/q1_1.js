/* Is Unique: */

// Input: String
// Output: Boolean - whether or not the string has all unique characters

/* Questions:
What is the result of empty/null strings?
*/

/* Solution 1 -
Create a map of all the characters in the string and iterate thru the string
if a character appears twice, return false, otherwise return true
Time: O(n)
Space: O(n)
*/
let isUnique = function(str) {
  if (str == null || str.length == 0) return false;
  let charmap = {};
  for (let char of str) {
    if (charmap[char]) {
      return false;
    }
    else {
      charmap[char] = true;
    }
  }
  return true;
};
console.log("Solution 1")
console.log("Input: auniqestr | Expected answer: true | Output:", isUnique("auniqestr"));
console.log("Input: aaaaa | Expected answer: false | Output:", isUnique("aaaaa"));
console.log("Input: \"\" | Expected answer: false | Output:", isUnique(""));

// If not extra DS can be used, then you can iterate thru each character and search for if it's unique.
// Takes O(n^2) time
// Another solution is to sort the array of characters and iterate thru them checking if the next character is the same
// Takes O(n log n) time (some sorting alogorithms can take more space)

/* BOOK SOLUTION:
- Ask about if ASCII
  - Asking help with case of if the string is greater than the length of alphabet than it's not unique
- Have an array of 128 or 256 boolean to represent each character
- Go true each char, when found, if character is already true then not unique
*/
