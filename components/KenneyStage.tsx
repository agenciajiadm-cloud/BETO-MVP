"use client";

import { isoPoint, kenneyPieces } from "@/lib/kenney";

type Props = {
  sectorId: number;
  stage: number;
};

export function KenneyStage({ sectorId, stage }: Props) {
  const pieces = kenneyPieces(sectorId, stage);

  return (
    <div className="kenney-stage" aria-hidden="true">
      <div className="kenney-origin">
        {pieces.map((piece, i) => {
          const { x, y } = isoPoint(piece.col, piece.row);
          return (
            <img
              key={`${piece.src}-${piece.col}-${piece.row}-${i}`}
              src={piece.src}
              alt=""
              className="kenney-piece"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                zIndex: piece.z,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
