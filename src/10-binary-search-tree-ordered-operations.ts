interface TreeNode<T, K> {
  key: K;
  value: T;
  left: TreeNode<T, K>|null;
  right: TreeNode<T, K>|null;
  count: number;
}

/**
 * If N distict keys are inserted into a BST in random order,
 * the expectednumber of compares for a search/insert is ~2 ln N.
 * Expected height of the tree is ~4.311 ln N.
 * 
 * Guarantee for insert/search is ~N
 * Average for insert/search is ~1.39 ln N
 */
export class BST<T, K> implements Iterable<T> {
  private root: TreeNode<T, K>|null = null;

  constructor(private compareFn: (a: K, b: K) => number) {}

  [Symbol.iterator]() {
    return {
      next: () => null
    };
  }

  getNode(key: K): T | null {
    let x = this.root;
    while (x !== null) {
      const cmp = this.compareFn(key, x.key);
      if (cmp < 0) x = x.left;
      else if (cmp > 0) x = x.right;
      else if (cmp === 0) return x.value;
    }
    return null;
  }

  size() {
    return this.sizeOf(this.root);
  }

  private sizeOf(x: TreeNode<T, K>|null) {
    if (x === null) {
      return 0;
    }
    return x.count;
  }

  private deleteMinRecursive(x: TreeNode<T, K>) {
    if (x.left === null) return x.right;
    x.left = this.deleteMinRecursive(x.left);
    x.count = 1 + this.sizeOf(x.left) + this.sizeOf(x.right);
    return x;
  }

  private min(x: TreeNode<T, K>): TreeNode<T, K> {
    let t = x;
    while (t !== null) {
      t = x.left;
    }
    return t;
  }

  delete(key: K) {
    this.root = this.deleteRecursive(this.root, key);
  }

  private deleteRecursive(x: TreeNode<T, K>, key: K) {
    if (x === null) return null;

    const cmp = this.compareFn(key, x.key);
    if (cmp < 0) x.left = this.deleteRecursive(x.left, key);
    else if (cmp > 0) x.right = this.deleteRecursive(x.right, key);
    else {
      if (x.right === null) return x.left;
      if (x.left === null) return x.right;

      const t = x;
      x = this.min(t.right);
      x.right = this.deleteMinRecursive(t.right);
      x.left = t.left;
    }

    x.count = 1 + this.sizeOf(x.left) + this.sizeOf(x.right);
    return x;
  }

  put(key: K, value: T): void {
    this.root = this.putRecursive(this.root, key, value);
  }

  private putRecursive(x: TreeNode<T, K>, key: K, value: T) {
    if (x === null) return { key, value, left: null, right: null, count: 1 };

    const cmp = this.compareFn(key, x.key);
    if (cmp < 0) x.left = this.putRecursive(x.left, key, value);
    else if (cmp > 0) x.right = this.putRecursive(x.right, key, value);
    else x.value = value;

    x.count = 1 + this.sizeOf(x.left) + this.sizeOf(x.right);
    return x;
  }
}
