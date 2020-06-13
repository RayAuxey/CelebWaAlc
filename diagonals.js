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
  let newMatrix = JSON.parse(JSON.stringify(matrix));
  const [newLeft, newRight] = getReverseDiagonals(newMatrix);
  const rowLength = newMatrix.length;
  for (let i = 0; i < newMatrix.length; i++) {
    newMatrix[i][i] = newLeft[i];
    newMatrix[i][rowLength - (i + 1)] = newRight[i];
  }
  return newMatrix;
};

console.log(
  changeDiagonals([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
