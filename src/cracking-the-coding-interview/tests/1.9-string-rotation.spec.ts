import { containsRotation } from '../1.9-string-rotation';

describe('String Rotation', () => {
  it('should be true if "waterbottle" and "erbottlewat" are given', () => {
    const isRotation = containsRotation('waterbottle', 'erbottlewat');
    
    expect(isRotation).toBe(true);
  });

  it('should be true if "cows" and "cows" are given', () => {
    const isRotation = containsRotation('cows', 'cows');
    
    expect(isRotation).toBe(true);
  });

  it('should be false if string is not a rotation', () => {
    const isRotation = containsRotation('waterbottle', 'sheep');

    expect(isRotation).toBe(false);
  });
});
