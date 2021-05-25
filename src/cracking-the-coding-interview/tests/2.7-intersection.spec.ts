import { isIntersecting, LinkedList } from '../2.7-intersection';

describe('Linked List Intersection', () => {
  const list1 = new LinkedList();
  const list2 = new LinkedList();
  const list3 = new LinkedList();

  beforeEach(() => {
    const same = { next: null };
    list1.add({ next: null });
    list1.add(same);
    list1.add({ next: null });

    list2.add({ next: null });
    list2.add({ next: null });
    list2.add({ next: null });

    list3.add({ next: null });
    list3.add({ next: null });
    list3.add(same);
  });

  it('should not have any intersections between list1 and list2', () => {
    const hasIntersections = isIntersecting(list1, list2);

    expect(hasIntersections).toBe(false);
  });

  it('should not have an intersection between list1 and list3', () => {
    const hasIntersections = isIntersecting(list1, list3);

    expect(hasIntersections).toBe(true);
  });

  it('should not have any intersections between list2 and list3', () => {
    const hasIntersections = isIntersecting(list2, list3);

    expect(hasIntersections).toBe(false);
  });
});

