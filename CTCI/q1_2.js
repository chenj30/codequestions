/* Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. */

//Input: two strings
//Output: True of False, whether one is a permutation of the other

/* Questions:
Empty strings? Corner case of two empty strings?
Missed: Case sensitivity and whitespace
*/

/* Solution 1:
Use a map to map occurances of each character, then compare if occurances are the same
Time: O(n)
Space: O(n)
*/

let checkPermutation = function(string1, string2) {
  if (string1.length != string2.length) return false;
  let string1map = {};
  let string2map = {};
  for (let c1 of string1) {
    if (string1map[c1]) { string1map[c1]++; }
    else { string1map[c1] = 1; }
  }
  for (let c2 of string2) {
    if (string2map[c2]) { string2map[c2]++; }
    else { string2map[c2] = 1; }
  }
  for (let c of string1) {
    if (string1map[c] != string2map[c]) return false;
  }
  return true;
};

// Tests:
var assert = require('assert');
assert(checkPermutation('cat', 'cattle'), true);
assert(checkPermutation('keyword', 'dork'), true);
assert(checkPermutation('fatter', 'feasts'), false);
assert(checkPermutation('test', 'sett'), true);

/* Other Solutions:
Sort the array then loop thru, if characters dont match at any point, return false;
Time: O(n log n) Assuming O(n log n) sorting alogrithm
Space: O(1) Assuming no extra space from sorting

Using maps, increment on found characters then decrement on 2nd string, if negative then return false.
All characters should be 0 at end of loop thru.
Time: O(n)
Space: O(n)
*/
