/* One Away: */

// Input: Two strings
// Output: Boolean

/* Questions:
*/

/* Solution:
Check if the difference in string length is a difference of 1; if not: return false;
if so, check letter by letter for the difference; if there is more than one difference: return false;
else return true;
Time: O(n)
Space: O(1)
*/

let oneAway = function(string1, string2) {
  if (Math.abs(string1.length - string2.length) > 1) return false;
  let shortStr = '';
  let longStr = '';
  let foundDiff = false;
  if (string1.length > string2.length) {
    longStr = string1;
    shortStr = string2;
  } else if (string2.length > string1.length) {
    longStr = string2;
    shortStr = string1;
  } else {
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] != string2[i]) {
        if (!foundDiff) foundDiff = true;
        else return false;
      }
    }
    return true;
  }
  let i = 0, j = 0;
  while (i < shortStr.length) {
    if (shortStr[i] != longStr[j]) {
      if (!foundDiff) {
        j++;
        foundDiff = true;
      } else {
        return false;
      }
    } else {
      i++;
      j++;
    }
  }
  return true;
}

console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pale", "pales"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bae"), false);
console.log(oneAway("pa", "pale"), false);
