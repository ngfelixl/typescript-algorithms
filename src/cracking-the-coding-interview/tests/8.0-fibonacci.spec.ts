import { fibonacci } from '../8.0-fibonacci';

describe('Fibonacci', () => {
  it('should return 0 if 0 is the depth', () => {
    const result = fibonacci(0);
    expect(result).toBe(0);
  });

  it('should return 1 if depth is 1', () => {
    const result = fibonacci(1);
    expect(result).toBe(1);
  });

  it('should return 5 if depth is 5', () => {
    const result = fibonacci(5);
    expect(result).toBe(5);
  });

  it('should return 8 if depth is 6', () => {
    const result = fibonacci(6);
    expect(result).toBe(8);
  });

  it('should return 34 if depth is 9', () => {
    const result = fibonacci(9);
    expect(result).toBe(34);
  });
})