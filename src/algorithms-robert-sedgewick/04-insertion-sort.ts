type CompareFunction<T> = (a: T, b: T) => number;

/**
 * The algorithm runs in ~1/4 N^2
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

const data = [0, 5, 178, 40, 389, 1, 3, 10, 40, 50];
function compareFn(a: number, b: number) { return b - a; }

console.log(insertionSort(data, compareFn));