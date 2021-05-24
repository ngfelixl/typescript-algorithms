export function containsRotation(rotation: string, contains: string): boolean {
  let rotations = '';

  for (let i = 0; i < rotation.length; i++) {
    rotations = `${rotations}${rotation.slice(i, rotation.length)}${rotation.slice(0, i)} `
  }

  return rotations.includes(contains);
}