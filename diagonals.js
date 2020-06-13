/*
Write a program to reverse the diagonals of a matrix.
Input:-
[[1,2,3],
 [4,5,6],
 [7,8,9]]

Output:-
[[9,2,7],
 [4,5,6],
 [3,8 1]]

👀👀
*/
const getReverseDiagonals = (matrix) => {
  if (matrix[0].length != matrix.length) {
    throw new Error("Only square matrix allowed");
  }
  let leftDiagonal = [];
  let rightDiagonal = [];
  matrix.forEach((row, i) => {
    leftDiagonal.push(row[i]);
    rightDiagonal.push(row[row.length - (i + 1)]);
  });
  return [leftDiagonal.reverse(), rightDiagonal.reverse()];
};

const changeDiagonals = (matrix) => {
  // Not to mutate original matrix, we clone it
  // let newMatrix = JSON.parse(JSON.stringify(matrix));
  const [newLeft, newRight] = getReverseDiagonals(matrix /* newMatrix*/);
  const rowLength = matrix.length;
  // for (let i = 0; i < newMatrix.length; i++) {
  //   newMatrix[i][i] = newLeft[i];
  //   newMatrix[i][rowLength - (i + 1)] = newRight[i];
  // }
  // return newMatrix;

  return matrix.map((row, i) =>
    row.map((num, j) => {
      if (j === i) return newLeft[i];
      else if (j === rowLength - (i + 1)) return newRight[i];
      else return num;
    })
  );
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Input matrix:", matrix);
console.log("Output matrix:", changeDiagonals(matrix));
