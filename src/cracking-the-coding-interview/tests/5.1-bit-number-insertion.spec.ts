import { insert } from '../5.1-bit-number-insertion';

describe('Insert Bits', () => {
  it('should insert 3 in 19 at 1, 2 resulting in 23', () => {
    const n = 19; // 10011
    const m = 3;  // 00011
    const i = 1;
    const j = 2;

    const next = insert(n, m, i, j); 
    // 10111
    //   ^^ inserted bits
    expect(next).toBe(23);
  });
});
