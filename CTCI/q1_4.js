/* Palindrome Permutation: */

// Input: string
// Output: boolean

/* Questions
Do white space matter? Capitalization?
*/

/* Solution:
Create a map of the characters and their occurances. If all occurances are even or all even and one odd, then any permutation is also a palindrome.
Time: O(n)
Space: O(n)
*/

let palipermu = function(string) {
  let charMap = {};
  string = string.toLowerCase();
  for (let c of string) {
    if (c == ' ') continue;
    if (charMap[c]) { charMap[c]++; }
    else { charMap[c] = 1; }
  }
  let numOdds = 0;
  for (let char of Object.keys(charMap)) {
    if (charMap[char] % 2 != 0) { numOdds++; }
  }
  if (numOdds > 1) return false;
  else return true;
}

console.log(palipermu('Taco cat'), true);
console.log(palipermu('tac o tac'), true);
console.log(palipermu('rrccaae'), true);
console.log(palipermu('permumur'), false);

/* Book notes:
If the string is only alphabet letters (26), then can use a bit vector to represent the counts and check for only one bit toggled
*/
