/* String Rotation */

//Input: two strings, s1 and s2
//Output: True or False, s2 is a rotation of s1

/* Questions:
*/

/* Solution:
Take s2 and append it to itself. If s2 is a rotation of s1 then s1 is a substring of s2.
Time: same as isSubstring
Space: O(2n) where n is the length of s2
*/

const isSubstring = function(str1, str2) {
  return str1.indexOf(str2) > -1;
}

const stringRotation = function(s1, s2) {
  if (s1.length != s2.length) return false;
  let extended = s2+s2;
  return isSubstring(extended,s1);
}

console.log(stringRotation("waterbottle", "erbottlewat"), true);
console.log(stringRotation("water", "wate"), false);
console.log(stringRotation("nintendoswitch", "switchnintendo"), true);
