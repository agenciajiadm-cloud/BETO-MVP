"use client";

import { sectorStageImage } from "@/lib/story";

type Props = {
  sectorId: number;
  stage: number;
  onPick: (n: number) => void;
};

export function SectorVisual({ sectorId, stage, onPick }: Props) {
  return (
    <div>
      <div className="mt-8 flex w-full flex-1 items-center justify-center md:mt-0 md:hidden md:flex-none">
        <div key={stage} className="sector-cell is-on stage-in aspect-square w-[min(78vw,22rem)]">
          <img src={sectorStageImage(sectorId, stage)} alt="" />
        </div>
      </div>

      <div className="sector-frame hidden md:grid">
        {[0, 1, 2].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onPick(n)}
            className={`sector-cell aspect-[4/5] ${n === stage ? "is-on" : ""}`}
            aria-label={`Etapa ${n + 1}`}
          >
            <img src={sectorStageImage(sectorId, n)} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}
