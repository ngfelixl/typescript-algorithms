type CompareFunction<T> = (a: T, b: T) => number;

/**
 * The algorithm sorts in O(N^2/2) time.
 * It is part of the Algorithms book by Robert Sedgewick in Chapter 2.1
 * 
 * Expected API for the tests:
 * 
 * ```typescript
 * export function selectionSort<T>(array: T[], compareFn: (a, b) => number): T[]
 * ```
 * @param array 
 * @param compareFn 
 * @returns 
 */
export function selectionSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  const sortArray = [...array];
  const length = sortArray.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (compareFn(sortArray[i], sortArray[j]) < 0) {
        [sortArray[i], sortArray[j]] = [sortArray[j], sortArray[i]];
      }
    }
  }
  return sortArray;
}
