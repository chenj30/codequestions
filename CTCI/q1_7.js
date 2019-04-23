/* Rotate Matrix */

/* Questions:
  Rotate clockwise or counter?
*/

/* Solution
make new matrix with rotated data
[[(0,0),(0,1), (0,2)],
[(1,0), (1,1), (1,2)],
[(2,0), (2,1), (2,2)]]
0,0 = 0,2
1,0 = 0,1
2,0 = 0,0
2,1 = 1,0
2,2 = 2,0
1,2 = 2,1
0,2 = 2,2
0,1 = 1,2
for each coord, the new coord is (len-y, x)
Time: O(n*n)
Space: O(n*n)
*/

let rotateMatrix = function(matrix) {
  let newMatrix = [matrix.length];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [matrix.length];
  }
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      newMatrix[matrix.length-1 - y][x] = matrix[x][y];
    }
  }
  return newMatrix;
};

let sample = [['1','2','3','4'],['5','6','7','8'],['9','10','11','12'],['13','14','15','16']];
let answer = [['4','8','12','16'],['3','7','11','15'],['2','6','10','14'],['1','5','9','13']];
console.log(rotateMatrix(sample), answer);
