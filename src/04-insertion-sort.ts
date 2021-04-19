type CompareFunction<T> = (a: T, b: T) => number;

export function insertionSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  const sortedArray = [...array];
  const length = sortedArray.length;

  for (let i = 0; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (compareFn(sortedArray[j - 1], sortedArray[j]) < 0) {
        [sortedArray[j - 1], sortedArray[j]] = [
          sortedArray[j],
          sortedArray[j - 1],
        ];
      } else {
        break;
      }
    }
  }

  return sortedArray;
}

const numberData = {
  data: [0, 5, 178, 40, 389, 1, 3, 10, 40, 50],
  compareFn: (a: number, b: number) => a === b
    ? 0
    : (b < a ? -1 : 1)
};

console.log(insertionSort(numberData.data, numberData.compareFn));