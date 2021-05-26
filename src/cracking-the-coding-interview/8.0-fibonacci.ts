export function fibonacci(depth: number): number {
  if (depth === 0) {
    return 0;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i < depth; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return a + b;
}