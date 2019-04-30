/* Zero Matrix */

// Input: MxN 2d array
// Output: Modified array

/* Questions:
More than one zero? Can I use extra space?
*/

/* Solution:
-Simplest: Copy matrix. Loop thru the array, if the element is 0, then change all rows and cols of element to zero in copied array
Time: O(M^2xN^2)
Space: O(MxN)
-Better: Make 2 sets, one for M and one for N. Loop thru matrix and checks for 0's. Add the row to M set and col to N set.
Loop thru the set and set all rows and cols to 0
Time: O(MxN)
Space: O(M+N)
*/

const zeroMatrix = function(matrix) {
  let mSet = {};
  let nSet = {};
  for (let m = 0; m < matrix.length; m++) {
    for (let n = 0; n < matrix[m].length; n++) {
      if (matrix[m][n] == 0) {
        if (mSet[m] == null) mSet[m] = true;
        if (nSet[n] == null) nSet[n] = true;
      }
    }
  }
  for (let m in mSet) {
    for (let n = 0; n < matrix[m].length; n++) {
      matrix[m][n] = 0;
    }
  }
  for (let n in nSet) {
    for (let m = 0; m < matrix.length; m++) {
      matrix[m][n] = 0;
    }
  }
  return matrix;
}

let m1 = [[1,2,0],[2,3,4],[1,0,1]];
let m2 = [[0,0,1],[2,2,2],[1,1,0]];
let m3 = [[1,1,1],[2,2,2],[3,3,3]];

let a1 = [[0,0,0],[2,0,0],[0,0,0]];
let a2 = [[0,0,0],[0,0,0],[0,0,0]];
let a3 = [[1,1,1],[2,2,2],[3,3,3]];

console.log(zeroMatrix(m1), a1);
console.log(zeroMatrix(m2), a2);
console.log(zeroMatrix(a3), a3);

/* Can be O(1) Space by using first row and col as the boolean arrays. Use a rowHasZero and colHasZero boolean to track and 0 first row and col later. Then use first row and col to hold the 0's found */
