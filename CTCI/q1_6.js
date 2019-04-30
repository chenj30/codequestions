/* String Compression */

/* Questions:
whitespace? (no whitespaces, so no need to account for)
case-sensitive treated separately?
*/

/* Solution
Naive: Iterate thru the string, keep a counter for each letter, append to new
string the character and count when the letter switches. Compare string lengths,
if shorter, return new string.
Time: O(n)
Space: O(n)
*/

let stringCompression = function(str) {
  let compressed = '';
  let current_c = str[0];
  let c_count = 0;
  for (let c of str) {
    if (c != current_c) {
      compressed += current_c + c_count;
      current_c = c;
      c_count = 0;
    }
    c_count++;
  }
  compressed += current_c + c_count;
  if (compressed.length < str.length) return compressed;
  else return str;
};

console.log(stringCompression("aabcccccaaa"), "a2b1c5a3");
console.log(stringCompression("abcd"), "abcd");
console.log(stringCompression("aaaaaaaaaab"), "a10b1");
console.log(stringCompression("aabbccdd"), "aabbccdd");
console.log(stringCompression("aAaAbBccdd"), "aAaAbBccdd");
console.log(stringCompression("ababababababa"), "ababababababa");
