type CompareFunction<T> = (a: T, b: T) => number;

/**
 * The algorithm runs in ~1/4 N^2
 * It is part of the Algorithms book by Robert Sedgewick in Chapter 2.1
 * 
 * Expected API for the tests:
 * 
 * ```typescript
 * export function insertionSort<T>(array: T[], compareFn: (a, b) => number): T[]
 * ```
 * @param array 
 * @param compareFn 
 * @returns 
 */
export function insertionSort<T>(array: T[], compareFn: CompareFunction<T>, h = 1): T[] {
  const sortedArray = [...array];
  const length = sortedArray.length;

  for (let i = 0; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (compareFn(sortedArray[j - 1], sortedArray[j]) < 0) {
        [sortedArray[j - 1], sortedArray[j]] = [sortedArray[j], sortedArray[j - 1]];
      } else {
        break;
      }
    }
  }

  return sortedArray;
}