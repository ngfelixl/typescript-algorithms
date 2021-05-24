/**
 * Algorithm takes linear time ~N
 * @param array 
 * @returns 
 */
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  const length = shuffled.length;

  for (let i = 0; i < length; i++) {
    const j = Math.floor(Math.random() * i) & (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}


console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));