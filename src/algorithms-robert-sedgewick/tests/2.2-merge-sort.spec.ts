import { bottomUpMergeSort, topDownMergeSort } from '../2.2-merge-sort';

describe('Top Down Merge Sort', () => {
  it('should sort an array', () => {
    const input = [34, 1, 3, 69, 3, 5];

    const sorted = topDownMergeSort(input, (a, b) => b - a);

    expect(sorted).toEqual([1, 3, 3, 5, 34, 69]);
  });

  it('should return an empty array if the input is an empty array', () => {
    const input = [];

    const sorted = topDownMergeSort(input, (a, b) => b - a);

    expect(sorted).toEqual([]);
  });
});

describe('Bottom Up Merge Sort', () => {
  it('should sort an array', () => {
    const input = [34, 1, 3, 69, 3, 5];

    const sorted = bottomUpMergeSort(input, (a, b) => b - a);

    expect(sorted).toEqual([1, 3, 3, 5, 34, 69]);
  });

  it('should return an empty array if the input is an empty array', () => {
    const input = [];

    const sorted = bottomUpMergeSort(input, (a, b) => b - a);

    expect(sorted).toEqual([]);
  });
});