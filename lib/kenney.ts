export type KenneyPiece = {
  src: string;
  col: number;
  row: number;
  z: number;
};

const BUILDINGS = [20, 100, 10, 25, 35, 40, 1, 2, 3, 4, 9, 11, 14, 17, 21];

const SLOTS: [number, number][] = [
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1],
  [-1, 0],
  [0, -1],
  [2, 0],
  [1, -1],
];

function pad(n: number) {
  return String(n).padStart(3, "0");
}

function building(n: number) {
  return `/kenney/buildings/buildingTiles_${pad(n)}.png`;
}

function city(n: number) {
  return `/kenney/city/cityTiles_${pad(n)}.png`;
}

export function kenneyPieces(sectorId: number, stage: number): KenneyPiece[] {
  const count = Math.min(1 + stage + Math.floor((sectorId - 1) / 2), SLOTS.length);
  const pieces: KenneyPiece[] = [];

  if (sectorId >= 2) {
    pieces.push({ src: city(0), col: -1, row: 1, z: 0 });
  }
  if (sectorId >= 4) {
    pieces.push({ src: city(30), col: 2, row: 1, z: 1 });
  }

  for (let i = 0; i < count; i++) {
    const [col, row] = SLOTS[i];
    const id = BUILDINGS[(sectorId * 3 + stage + i * 2) % BUILDINGS.length];
    pieces.push({
      src: building(id),
      col,
      row,
      z: 10 + col + row * 2,
    });
  }

  return pieces;
}

export function isoPoint(col: number, row: number) {
  return {
    x: (col - row) * 64,
    y: (col + row) * 32,
  };
}
