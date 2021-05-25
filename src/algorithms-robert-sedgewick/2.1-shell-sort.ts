
type CompareFunction<T> = (a: T, b: T) => number;

export function shellSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  const n = array.length;
  let h = 1;

  while (h < n / 3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && compareFn(array[j - h], array[j]) < 0; j = j - h) {
        [array[j], array[j - h]] = [array[j - h], array[j]];
      }
    }
    h = Math.floor(h / 3);
  }

  return array;
}