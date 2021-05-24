/**
 * Solution for exercise 1.8 in "Cracking the coding interview", p. 91
 * @param matrix 
 * @returns 
 */

export function zeroMatrix(matrix: number[][]): number[][] {
  const cols = new Set<number>();
  const rows = new Set<number>();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (const j of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][j] = 0;
    }
  }

  for (const i of rows) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = 0;
    }
  }

  return matrix;
}