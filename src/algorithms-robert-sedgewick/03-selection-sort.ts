type CompareFunction<T> = (a: T, b: T) => number;

/**
 * The algorithm sorts in O(N^2/2) time
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


const data = [0, 5, 178, 40, 389, 1, 3, 10, 40, 50];
function compareFn(a: number, b: number) { return b - a }

console.log(selectionSort(data, compareFn));