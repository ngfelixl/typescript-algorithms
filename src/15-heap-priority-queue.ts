/**
 * Related book: Algorithms, Robert Sedgewick
 * 2021/05/21
 */
export class MaxPriorityQueue<T> {
  private priorityQueue: T[] = [];
  private n = 0;

  constructor(private compareFn: (that: T, to: T) => number) {}

  isEmpty(): boolean {
    return this.n === 0;
  }

  size(): number {
    return this.n;
  }

  insert(element: T) {
    this.priorityQueue[++this.n] = element;
    this.swim(this.n);
  }

  deleteMax(): T {
    const max = this.priorityQueue[1];
    this.exchange(1, this.n--);
    this.priorityQueue[this.n + 1] = null;
    this.sink(1);
    return max;
  }

  private less(i: number, j: number): boolean {
    return this.compareFn(this.priorityQueue[i], this.priorityQueue[j]) < 0;
  }

  private swim(index: number) {
    while(index > 1 && this.less(Math.floor(index / 2), index)) {
      this.exchange(Math.floor(index / 2), index);
      index = Math.floor(index / 2);
    } 
  }

  private sink(index: number) {
    while (2 * index <= this.n) {
      let j = 2 * index;
      if (j < this.n && this.less(j, j + 1)) {
        j++;
      }
      if (!this.less(index, j)) {
        break;
      }
      this.exchange(index, j);
      index = j;
    }
  }

  private exchange(i: number, j: number) {
    const element = this.priorityQueue[i];
    this.priorityQueue[i] = this.priorityQueue[j];
    this.priorityQueue[j] = element;
  }
}