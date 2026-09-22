"use client";

import { KenneyStage } from "./KenneyStage";

type Props = {
  sectorId: number;
  stage: number;
  onPick: (n: number) => void;
};

function cardRole(index: number, stage: number) {
  if (index < stage) return "is-gone";
  if (index === stage) return "is-front";
  if (index === stage + 1) return "is-next";
  return "is-last";
}

export function SectorVisual({ sectorId, stage, onPick }: Props) {
  return (
    <div className="card-scene" aria-label={`Construção, etapa ${stage + 1} de 3`}>
      <div className="card-stack">
        {[0, 1, 2].map((n) => (
          <button
            key={n}
            type="button"
            className={`stack-card ${cardRole(n, stage)}`}
            aria-label={`Etapa ${n + 1}`}
            aria-pressed={n === stage}
            tabIndex={n < stage ? -1 : 0}
            onClick={() => onPick(n)}
          >
            <KenneyStage sectorId={sectorId} stage={n} />
          </button>
        ))}
      </div>
    </div>
  );
}
