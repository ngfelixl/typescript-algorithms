import { shuffle } from './1.1-shuffling';

type CompareFunction<T> = (a: T, b: T) => number;

/**
 * Quicksort implementation in algorithms, p. 289
 * The algorithm uses ~2n ln n compares (and 1/6 many exchanges) on
 * average to sort an array with n distinct keys.
 * @param array 
 * @param compareFn 
 * @returns 
 */
export function quickSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  array = shuffle(array);
  recursiveSort(array, 0, array.length - 1);
  return array;

  function recursiveSort(array: T[], low: number, high: number) {
    if (high <= low) {
      return;
    }

    const j = partition(array, low, high);

    recursiveSort(array, low, j - 1);
    recursiveSort(array, j + 1, high);
  }

  function partition(array: T[], low: number, high: number): number {
    let i = low;
    let j = high + 1;

    const v = array[low];

    while(true) {
      while(compareFn(v, array[++i]) < 0) {
        if (i === high) {
          break;
        }
      }

      while(compareFn(array[--j], v) < 0) {
        if (j === low) {
          break;
        }
      }

      if (i >= j) {
        break;
      }

      [array[i], array[j]] = [array[j], array[i]];
    }
    [array[low], array[j]] = [array[j], array[low]];
    return j;
  }
}