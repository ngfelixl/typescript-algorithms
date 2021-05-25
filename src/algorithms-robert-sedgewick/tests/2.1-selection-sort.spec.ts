import { selectionSort } from '../2.1-selection-sort';

describe('Selection Sort', () => {
  it('should sort an array', () => {
    const input = [34, 1, 3, 69, 3, 5];

    const sorted = selectionSort(input, (a, b) => b - a);

    expect(sorted).toEqual([1, 3, 3, 5, 34, 69]);
  });

  it('should return an empty array if the input is an empty array', () => {
    const input = [];

    const sorted = selectionSort(input, (a, b) => b - a);

    expect(sorted).toEqual([]);
  });
});