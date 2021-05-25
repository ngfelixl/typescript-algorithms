type CompareFunction<T> = (a: T, b: T) => number;

/**
 * Top-Down Mergesort in Algorithms, p. 271
 * This algorithm uses at most 6n lg n array accesses to sort an array of length n.
 * @param array 
 * @param compareFn 
 * @returns 
 */
export function topDownMergeSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  const aux: T[] = new Array(array.length);
  recursiveSort(array, 0, array.length - 1);
  return array;

  function recursiveSort(array: T[], low: number, high: number) {
    if (high <= low) {
      return;
    }
  
    const mid = Math.floor(low + (high - low) / 2);
  
    recursiveSort(array, low, mid);
    recursiveSort(array, mid + 1, high);
    merge(array, low, mid, high);
  }
  
  function merge(array: T[], low: number, mid: number, high: number) {
    let i = low;
    let j = mid + 1;
  
    for (let k = low; k <= high; k++) {
      aux[k] = array[k];
    }
  
    for (let k = low; k <= high; k++) {
      if (i > mid) {
        array[k] = aux[j++];
      } else if (j > high) {
        array[k] = aux[i++];
      } else if (compareFn(aux[i], aux[j]) < 0) {
        array[k] = aux[j++];
      } else {
        array[k] = aux[i++];
      }
    }
  }
}

/**
 * Bottom up merge sort in algorithms, p. 278
 * It uses (6n lg n) array accesses at most and between
 * ~(1/2 n lg n) and (n lg n) compares
 * @param array 
 * @param compareFn 
 * @returns 
 */
export function bottomUpMergeSort<T>(array: T[], compareFn: CompareFunction<T>): T[] {
  const n = array.length;
  const aux = new Array(array.length);

  for (let len = 1; len < n; len *= 2) {
    for (let low = 0; low < n - len; low += 2 * len) {
      merge(array, low, low + len - 1, Math.min(low + 2 * len - 1, n - 1));
    }
  }

  return array;

  function merge(array: T[], low: number, mid: number, high: number) {
    let i = low;
    let j = mid + 1;
  
    for (let k = low; k <= high; k++) {
      aux[k] = array[k];
    }
  
    for (let k = low; k <= high; k++) {
      if (i > mid) {
        array[k] = aux[j++];
      } else if (j > high) {
        array[k] = aux[i++];
      } else if (compareFn(aux[i], aux[j]) < 0) {
        array[k] = aux[j++];
      } else {
        array[k] = aux[i++];
      }
    }
  }
}
