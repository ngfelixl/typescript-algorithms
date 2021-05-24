import { zeroMatrix } from '../17-zero-matrix';

describe('zeroMatrix', () => {
  it('should zeroify a matrix correctly', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 0, 8],
      [9, 1, 2, 3]
    ];

    const next = zeroMatrix(matrix);

    expect(next).toEqual([
      [1, 2, 0, 4],
      [0, 0, 0, 0],
      [9, 1, 0, 3]
    ]);
  });

  it('should not zeroify anything if there are no zeroes', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 1, 2, 3]
    ];

    const next = zeroMatrix(matrix);

    expect(next).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 1, 2, 3]
    ]);

  })
});
