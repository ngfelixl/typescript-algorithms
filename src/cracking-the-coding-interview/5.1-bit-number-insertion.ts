/**
 * The function should insert the bits of one number into another number
 * starting at position i to position j. i and j are given so that the
 * range contains all 1 bits of m and fit into n.
 * @param n 
 * @param m 
 * @param i 
 * @param j 
 * @returns 
 */
export function insert(n: number, m: number, i: number, j: number): number {
  let mask = 0;

  for (let k = i; k < j; k++) {
    mask = mask | (1 << k);
  }

  n = (n & ~mask) | (m << i);
  return n;
}