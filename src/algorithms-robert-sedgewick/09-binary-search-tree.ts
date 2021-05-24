interface TreeNode<T, K> {
  key: K;
  value: T;
  left: TreeNode<T, K>|null;
  right: TreeNode<T, K>|null;
}


/**
 * If N distict keys are inserted into a BST in random order,
 * the expectednumber of compares for a search/insert is ~2 ln N.
 * Expected height of the tree is ~4.311 ln N.
 * 
 * Guarantee for insert/search is ~N
 * Average for insert/search is ~1.39 ln N
 */
export class BST<T, K> {
  private root: TreeNode<T, K>|null = null;

  constructor(private compareFn: (a: K, b: K) => number) {}

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

  delete(key: string) {}

  put(key: K, value: T): void {
    this.root = this.putRecursive(this.root, key, value);
  }

  private putRecursive(x: TreeNode<T, K>, key: K, value: T) {
    if (x === null) return { key, value, left: null, right: null };

    const cmp = this.compareFn(key, x.key);
    if (cmp < 0) x.left = this.putRecursive(x.left, key, value);
    else if (cmp > 0) x.right = this.putRecursive(x.right, key, value);
    else x.value = value;

    return x;
  }
}
