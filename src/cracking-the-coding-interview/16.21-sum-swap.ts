/**
 * Not solved
 */

export function sumSwap(first: number[], second: number[]): number[] {
  const firstSum = first.reduce((acc, cur) => acc + cur, 0);
  const secondSum = second.reduce((acc, cur) => acc + cur, 0);

  if (firstSum === secondSum) {
    throw new Error('Nothing to swap');
  }

  const avg = (firstSum + secondSum) / 2;
  const dist = Math.abs((firstSum - secondSum) / 2);
  const dir = firstSum < secondSum ? 1 : -1;

  console.log(avg, dist, dir);

  const firstSwapElement = first.find(el => firstSum - el + (dir * dist - el) === avg);
  const secondSwapElement = second.find(el => secondSum - el - (dir * dist - el) === avg);

  if (firstSwapElement && secondSwapElement) {
    return [firstSwapElement, secondSwapElement];
  }

  throw new Error('There are no compatible elements to swap');
}


console.log([4, 1, 2, 1, 1, 2], [3, 6, 3, 3], sumSwap([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]));