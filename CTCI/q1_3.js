/* URLify: */

// Input: String, "true" length
// Output: Modified String

/* Questions:
Can I use a new string?
Is the end always a nonwhitespace character?
*/

/* Solution:
Iterate through each character, copying to a new string. If a whitespace is found then add '%20'.
Time: O(n)
Space: O(n)
(If not allowed new string):
Count number of whitespaces by iterating thru string (using true length).
Note new length of string as trueLength+numWhiteSpace*2. (or assume string already has this length)
Iterate backwards with two pointers, one keept tracking of the original string and the other keeping track of the new string
Copy each char from the original to the new place, replacing the whitespaces, and moving the new string pointer accordingly
Time: O(n)
Space: O(1)
*/

let urlify = function(string, trueLength) {
  let i = trueLength-1;
  let j = string.length-1; // or let j = trueLength + numWhiteSpace*2;
  for (; i > 0;) {
    if (string[i] == ' ') {
      string[j-2] = '%';
      string[j-1] = '2';
      string[j] = '0';
      i--;
      j -= 3;
    } else {
      string[j] = string[i];
      i--;
      j--;
    }
  }
  return string;
};

assert = require('assert');
assert(urlify("Mr John Smith    ", 13), "Mr%20John%20Smith");
assert(urlify("a warn boy    ", 10), "a%20warn%20boy");
assert(urlify("2  space  ago        ", 13), "2%20%20space%20%20ago");
