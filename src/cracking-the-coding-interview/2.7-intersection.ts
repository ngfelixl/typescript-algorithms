interface ListEntry {
  next: ListEntry|null;
}

export class LinkedList implements IterableIterator<ListEntry> {
  first: ListEntry = null;
  last: ListEntry = null;
  pointer: ListEntry = null;

  next(value?: ListEntry): IteratorResult<ListEntry> {
    // const value = this.first;
    if (this.pointer && this.pointer.next) {
      this.pointer = this.pointer.next;
      return {
        done: false,
        value: this.pointer
      };
    } else {
      return {
        done: true,
        value: null
      }
    }
  }
  
  [Symbol.iterator](): IterableIterator<ListEntry> {
    return this;
  }

  add(element: ListEntry) {
    if (!this.first && !this.last) {
      this.first = element;
      this.last = element;
      this.pointer = element;
    } else {
      this.last.next = element;
      this.last = this.last.next;
    }
  }
}

/**
 * This function checks if two singly linked lists are intersecting by reference.
 */
export function isIntersecting(first: LinkedList, second: LinkedList): boolean {
  for (let el of first) {
    for (let el2 of second) {
      if (el === el2) {
        return true;
      }
    }
  }
  return false;
}