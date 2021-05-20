/**
 * Solution for exercise 16.22 in "Cracking the Coding Interview"
 * 2021/05/20
 * @param k 
 */
export function printKMoves(k: number) {
  const blacks = new Set<string>();
  const ant = new Ant();
  const boundaries = { x: [0, 0], y: [0, 0] };
  checkBoundaries(boundaries, ant);

  for(let i = 0; i < k; i++) {
    ant.next(blacks);
    checkBoundaries(boundaries, ant);
  }
  printGrid(blacks, boundaries);
}

function checkBoundaries(boundaries, ...ants: Ant[]) {
  const antXCoordinates = ants.map(ant => ant.coordinates[0]);
  const antYCoordinates = ants.map(ant => ant.coordinates[1]);
  boundaries.x[0] = Math.min(boundaries.x[0], ...antXCoordinates);
  boundaries.x[1] = Math.max(boundaries.x[1], ...antXCoordinates);
  boundaries.y[0] = Math.min(boundaries.y[0], ...antYCoordinates);
  boundaries.y[1] = Math.max(boundaries.y[1], ...antYCoordinates);
}

function printGrid(blacks: Set<string>, boundaries: {x: number[], y: number[]}) {
  for (let y = boundaries.y[0]; y <= boundaries.y[1]; y++) {
    let row = '';
    for (let x = boundaries.x[0]; x <= boundaries.x[1]; x++) {
      row += blacks.has(`${x}-${y}`) ? 'B' : ' ';
    }
    console.log(row);
  }
}

class Ant {
  private coords = [0, 0];
  private dir = [1, 0];

  constructor(private startCoords?: number[], private startDir?: number[]) {
    this.coords = this.startCoords ? this.startCoords : this.coords;
    this.dir = this.startDir ? this.startDir : this.dir;
  }

  get coordinates() {
    return this.coords;
  }

  next(blacks: Set<string>) {
    const coordinates = `${this.coords[0]}-${this.coords[1]}`;
    const isBlack = blacks.has(coordinates);
    if (isBlack) {
      blacks.delete(coordinates);
      this.rotateLeft();
    } else {
      blacks.add(coordinates);
      this.rotateRight();
    }
    this.coords = [
      this.coords[0] + this.dir[0],
      this.coords[1] + this.dir[1]
    ];
  }

  rotateLeft() {
    this.dir = [-this.dir[1], this.dir[0]];
  }

  rotateRight() {
    this.dir = [this.dir[1], -this.dir[0]];
  }
}


console.time();
printKMoves(+process.argv[2]);
console.timeEnd();
