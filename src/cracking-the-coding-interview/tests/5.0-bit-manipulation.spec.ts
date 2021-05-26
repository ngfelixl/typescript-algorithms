import { getBit, setBit, clearBit, updateBit } from '../5.0-bit-manipulation';

describe('Bit Manipulation', () => {
  describe('getBit', () => {
    it ('should return the correct bits', () => {
      const num = 4; // 100
      const bit0 = getBit(num, 0);
      const bit1 = getBit(num, 1);
      const bit2 = getBit(num, 2);
  
      expect(bit0).toBe(false);
      expect(bit1).toBe(false);
      expect(bit2).toBe(true);
    });
  });

  describe('setBit', () => {
    it('should set a bit to one for the index', () => {
      const num = 1; // 001 = 1

      const next1 = setBit(num, 1);   // 011 = 3
      const next2 = setBit(next1, 4); // 10011 = 19

      expect(next2).toBe(19); 
    });
  });

  describe('clearBit', () => {
    it('should clear a bit for the index', () => {
      const num = 19; // 10011

      const next = clearBit(num, 1);

      expect(next).toBe(17);
    });
  });

  describe('updateBit', () => {
    it('should turn a 1 to a 5 if update bit 2 with 1', () => {
      const num = 1;

      const next = updateBit(num, 2, true);

      expect(next).toBe(5);
    });

    it('should tun a 3 to a 2 if update bit 0 with 0', () => {
      const num = 3;

      const next = updateBit(num, 0, false);

      expect(next).toBe(2);
    });
  });
});
