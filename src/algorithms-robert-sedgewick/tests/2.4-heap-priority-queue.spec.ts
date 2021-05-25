import { MaxPriorityQueue } from '../2.4-heap-priority-queue';

interface PriorityObject {
  priority: number;
  name: string;
}

describe('HeapPriorityQueue', () => {
  let queue: MaxPriorityQueue<PriorityObject>;

  beforeEach(() => {
    queue = new MaxPriorityQueue((a, b) => a.priority - b.priority);
  });

  it('should have a default size of 0', () => {
    expect(queue.size()).toBe(0);
  });

  it('should add an element to the queue', () => {
    queue.insert({ priority: 15, name: 'Joshua' });

    expect(queue.size()).toBe(1);
  });

  it('should return undefined for dequeue if empty', () => {
    const dequeue = queue.deleteMax();

    expect(dequeue).toBe(undefined);
  })

  it('should be possible to dequeue an element', () => {
    queue.insert({ priority: 15, name: 'Annabelle' });

    const dequeue = queue.deleteMax();

    expect(dequeue).toEqual({ priority: 15, name: 'Annabelle' });
  });

  it('should dequeue the element with the highest priority', () => {
    queue.insert({ priority: 4, name: 'Anna' });
    queue.insert({ priority: 15, name: 'Jen' });
    queue.insert({ priority: 12, name: 'Horst' });

    const dequeue = queue.deleteMax();

    expect(dequeue.name).toBe('Jen');
    expect(queue.size()).toBe(2);
  });
});
