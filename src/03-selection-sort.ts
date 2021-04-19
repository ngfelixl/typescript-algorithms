type CompareFunction<T> = (a: T, b: T) => number;

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


const numberData = {
  data: [0, 5, 178, 40, 389, 1, 3, 10, 40, 50],
  compareFn: (a: number, b: number) => a === b
    ? 0
    : (b < a ? -1 : 1)
};

console.log(selectionSort(numberData.data, numberData.compareFn));