/**
 * Algorithm takes linear time ~N
 * @param array 
 * @returns 
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  const length = shuffled.length;

  for (let i = 0; i < length; i++) {
    const j = Math.floor(Math.random() * i) & (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
