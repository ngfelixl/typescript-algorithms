export function getBit(num: number, index: number): boolean {
  return ((num & (1 << index)) !== 0)
}

export function setBit(num: number, index: number): number {
  return num | (1 << index);
}

export function clearBit(num: number, index: number): number {
  return num & ~(1 << index);
}

export function updateBit(num: number, index: number, value: boolean) {
  const numValue = value ? 1 : 0;
  return (num & ~(1 << index)) | (numValue << index);
}